import { getSession } from "@auth0/nextjs-auth0";
import path from "path";
import { authMiddleware, prisma, createHandler } from "~/lib/utils.server";
import multer from "multer";
import { NextApiRequest } from "next";
import fs from "fs";
import { User } from "@prisma/client";
import parse, { BookmarkOrFolder } from "bookmarks-parser";
import { promisify } from "util";
import { format } from "date-fns";
import { sanitizeUrl } from "@braintree/sanitize-url";
import { ApiRequest } from "~/types/ApiRequest";

const parsePromise = promisify(parse);

const upload = multer({
	storage: multer.diskStorage({
		destination: path.resolve(process.cwd(), "uploads"),
		filename: (req, file, cb) =>
			cb(null, `${(req as unknown as ApiRequest).ctx.user.id}-bookmarks.html`),
	}),
});

export const config = {
	api: {
		bodyParser: false,
	},
};

const getBookmarksFromFolder = (data: BookmarkOrFolder): BookmarkOrFolder[] => {
	const bookmarks = [];
	for (const item of data.children) {
		if (item.type === "folder") {
			bookmarks.concat(getBookmarksFromFolder(item));
		} else {
			const copy = JSON.parse(JSON.stringify(item));
			bookmarks.push(copy);
		}
	}

	return bookmarks;
};

export default createHandler<ApiRequest>()
	.use(authMiddleware)
	.use(upload.single("file"))
	.post(async (req, res) => {
		const rawBookmarks = fs.readFileSync(
			path.join(
				path.resolve(
					process.cwd(),
					`uploads/${req.ctx.user.id}-bookmarks.html`,
				),
			),
			{ encoding: "utf-8" },
		);
		try {
			const parsed = await parsePromise(rawBookmarks);
			const bookmarks: BookmarkOrFolder[] = parsed.bookmarks.reduce(
				(acc, cur) => acc.concat(getBookmarksFromFolder(cur), []),
				[],
			);

			const tagName = `Imported from browser ${format(
				new Date(),
				"d/MM/yyyy",
			)}`;
			let tag = await prisma.tag.findFirst({
				where: {
					name: tagName,
					userId: req.ctx.user.id,
				},
			});

			if (!tag) {
				tag = await prisma.tag.create({
					data: {
						name: tagName,
						userId: req.ctx.user.id,
					},
				});
			}

			const transactions = bookmarks
				.filter(
					(item) =>
						!item.url.toLowerCase().startsWith("javascript:") &&
						!item.url.toLowerCase().includes("about:blank"),
				)
				.map(({ title, url }) => {
					const sanitized = sanitizeUrl(url);
					return prisma.bookmark.create({
						data: {
							title,
							url: sanitized,
							User: {
								connect: {
									id: req.ctx.user.id,
								},
							},
							tags: {
								connect: {
									id: tag.id,
								},
							},
						},
					});
				});

			await prisma.$transaction(transactions);

			res.status(204).end();
		} catch (err) {
			console.log(err);
			res.status(500).send({ error: err.toString() });
		}
	});
