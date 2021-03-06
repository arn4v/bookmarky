import Link from "next/link";

const MDXLink = (props: JSX.IntrinsicElements["a"]) => {
	const href = props.href;
	const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));

	if (isInternalLink) {
		return (
			<Link href={href}>
				<a {...props}>{props.children}</a>
			</Link>
		);
	}

	return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

const MDXComponents = {
	a: MDXLink,
};

export default MDXComponents;
