/* eslint-disable */
// ⚠️ DO NOT EDIT ⚠️
// This file is automatically generated, run yarn run generate to update

import { GraphQLResolveInfo } from "graphql";
import {
	useMutation,
	UseMutationOptions,
	useQuery,
	UseQueryOptions,
} from "react-query";
import { fetcher } from "./fetcher";
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
	[K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
	{ [SubKey in K]: Maybe<T[SubKey]> };
export type RequireFields<T, K extends keyof T> = {
	[X in Exclude<keyof T, K>]?: T[X];
} &
	{ [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type AccessToken = {
	__typename?: "AccessToken";
	id: Scalars["ID"];
	name: Scalars["String"];
	lastUsed: Scalars["String"];
	scopes: Array<Scalars["String"]>;
};

export type AuthenticationMessage = {
	__typename?: "AuthenticationMessage";
	code: Scalars["String"];
	message: Scalars["String"];
};

export type Bookmark = {
	__typename?: "Bookmark";
	id: Scalars["ID"];
	title: Scalars["String"];
	url: Scalars["String"];
	tags: Array<Tag>;
	createdAt: Scalars["String"];
	updatedAt: Scalars["String"];
};

export type CreateBookmarkInput = {
	title: Scalars["String"];
	url: Scalars["String"];
	tags: Array<CreateOrUpdateBookmarkTagInput>;
};

export type CreateOrUpdateBookmarkTagInput = {
	id?: Maybe<Scalars["String"]>;
	name?: Maybe<Scalars["String"]>;
};

export type FilterBookmarksTagInput = {
	name: Scalars["String"];
};

export type LoginMessage = {
	__typename?: "LoginMessage";
	code: Scalars["String"];
	message: Scalars["String"];
	accessToken?: Maybe<Scalars["String"]>;
};

export type Mutation = {
	__typename?: "Mutation";
	createBookmark: Bookmark;
	updateBookmark: Bookmark;
	renameTag: Tag;
	deleteTag: Scalars["Boolean"];
	deleteBookmark: Scalars["Boolean"];
	generateToken: AccessToken;
	updateToken?: Maybe<AccessToken>;
	deleteToken: Scalars["Boolean"];
};

export type MutationCreateBookmarkArgs = {
	input: CreateBookmarkInput;
};

export type MutationUpdateBookmarkArgs = {
	input: UpdateBookmarkInput;
};

export type MutationRenameTagArgs = {
	input?: Maybe<RenameTagInput>;
};

export type MutationDeleteTagArgs = {
	id: Scalars["ID"];
};

export type MutationDeleteBookmarkArgs = {
	id: Scalars["ID"];
};

export type MutationGenerateTokenArgs = {
	name: Scalars["String"];
	scopes: Array<Scalars["String"]>;
};

export type MutationUpdateTokenArgs = {
	id: Scalars["ID"];
	scopes: Array<Scalars["String"]>;
};

export type MutationDeleteTokenArgs = {
	id: Scalars["ID"];
};

export type Query = {
	__typename?: "Query";
	bookmark: Bookmark;
	bookmarks: Array<Bookmark>;
	tag: Tag;
	tagBookmarksCount: Scalars["Int"];
	tags?: Maybe<Array<Tag>>;
	user?: Maybe<User>;
	tokens: Array<AccessToken>;
	token: AccessToken;
};

export type QueryBookmarkArgs = {
	id: Scalars["ID"];
};

export type QueryBookmarksArgs = {
	tag?: Maybe<FilterBookmarksTagInput>;
};

export type QueryTagArgs = {
	id: Scalars["ID"];
};

export type QueryTagBookmarksCountArgs = {
	id: Scalars["ID"];
};

export type QueryTokenArgs = {
	id: Scalars["ID"];
};

export type RenameTagInput = {
	id: Scalars["ID"];
	name: Scalars["String"];
};

export type Tag = {
	__typename?: "Tag";
	id: Scalars["ID"];
	name: Scalars["String"];
};

export type UpdateBookmarkInput = {
	id: Scalars["ID"];
	title?: Maybe<Scalars["String"]>;
	url?: Maybe<Scalars["String"]>;
	tags?: Maybe<Array<CreateOrUpdateBookmarkTagInput>>;
};

export type User = {
	__typename?: "User";
	id: Scalars["ID"];
	email: Scalars["String"];
	emailVerified: Scalars["Boolean"];
	createdAt: Scalars["String"];
};

export type CreateBookmarkMutationVariables = Exact<{
	input: CreateBookmarkInput;
}>;

export type CreateBookmarkMutation = {
	__typename?: "Mutation";
	createBookmark: {
		__typename?: "Bookmark";
		id: string;
		title: string;
		url: string;
		createdAt: string;
		updatedAt: string;
		tags: Array<{ __typename?: "Tag"; id: string; name: string }>;
	};
};

export type DeleteBookmarkMutationVariables = Exact<{
	id: Scalars["ID"];
}>;

export type DeleteBookmarkMutation = {
	__typename?: "Mutation";
	deleteBookmark: boolean;
};

export type DeleteTagMutationVariables = Exact<{
	id: Scalars["ID"];
}>;

export type DeleteTagMutation = { __typename?: "Mutation"; deleteTag: boolean };

export type GenerateTokenMutationVariables = Exact<{
	name: Scalars["String"];
	scopes: Array<Scalars["String"]> | Scalars["String"];
}>;

export type GenerateTokenMutation = {
	__typename?: "Mutation";
	generateToken: {
		__typename?: "AccessToken";
		id: string;
		name: string;
		lastUsed: string;
	};
};

export type RenameTagMutationVariables = Exact<{
	input?: Maybe<RenameTagInput>;
}>;

export type RenameTagMutation = {
	__typename?: "Mutation";
	renameTag: { __typename?: "Tag"; id: string };
};

export type UpdateBookmarkMutationVariables = Exact<{
	input: UpdateBookmarkInput;
}>;

export type UpdateBookmarkMutation = {
	__typename?: "Mutation";
	updateBookmark: {
		__typename?: "Bookmark";
		id: string;
		title: string;
		url: string;
		createdAt: string;
		updatedAt: string;
		tags: Array<{ __typename?: "Tag"; id: string; name: string }>;
	};
};

export type GetAllBookmarksQueryVariables = Exact<{
	tag?: Maybe<FilterBookmarksTagInput>;
}>;

export type GetAllBookmarksQuery = {
	__typename?: "Query";
	bookmarks: Array<{
		__typename?: "Bookmark";
		id: string;
		title: string;
		url: string;
		createdAt: string;
		updatedAt: string;
		tags: Array<{ __typename?: "Tag"; id: string; name: string }>;
	}>;
};

export type GetAllTagsQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTagsQuery = {
	__typename?: "Query";
	tags?: Maybe<Array<{ __typename?: "Tag"; id: string; name: string }>>;
};

export type GetAllTokensQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTokensQuery = {
	__typename?: "Query";
	tokens: Array<{
		__typename?: "AccessToken";
		id: string;
		name: string;
		scopes: Array<string>;
		lastUsed: string;
	}>;
};

export type GetBookmarkQueryVariables = Exact<{
	id: Scalars["ID"];
}>;

export type GetBookmarkQuery = {
	__typename?: "Query";
	bookmark: {
		__typename?: "Bookmark";
		id: string;
		title: string;
		url: string;
		createdAt: string;
		updatedAt: string;
		tags: Array<{ __typename?: "Tag"; id: string; name: string }>;
	};
};

export type GetTagQueryVariables = Exact<{
	id: Scalars["ID"];
}>;

export type GetTagQuery = {
	__typename?: "Query";
	tag: { __typename?: "Tag"; id: string; name: string };
};

export type GetTagBookmarksCountQueryVariables = Exact<{
	id: Scalars["ID"];
}>;

export type GetTagBookmarksCountQuery = {
	__typename?: "Query";
	tagBookmarksCount: number;
};

export type GetTokenQueryVariables = Exact<{
	id: Scalars["ID"];
}>;

export type GetTokenQuery = {
	__typename?: "Query";
	token: {
		__typename?: "AccessToken";
		id: string;
		name: string;
		scopes: Array<string>;
		lastUsed: string;
	};
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
	__typename?: "Query";
	user?: Maybe<{
		__typename?: "User";
		id: string;
		email: string;
		emailVerified: boolean;
		createdAt: string;
	}>;
};

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
	fragment: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
	selectionSet: string;
	resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> =
	| LegacyStitchingResolver<TResult, TParent, TContext, TArgs>
	| NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
	| ResolverFn<TResult, TParent, TContext, TArgs>
	| StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> {
	subscribe: SubscriptionSubscribeFn<
		{ [key in TKey]: TResult },
		TParent,
		TContext,
		TArgs
	>;
	resolve?: SubscriptionResolveFn<
		TResult,
		{ [key in TKey]: TResult },
		TContext,
		TArgs
	>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
	subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
	resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<
	TResult,
	TKey extends string,
	TParent,
	TContext,
	TArgs,
> =
	| SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
	| SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<
	TResult,
	TKey extends string,
	TParent = {},
	TContext = {},
	TArgs = {},
> =
	| ((
			...args: any[]
	  ) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
	| SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
	parent: TParent,
	context: TContext,
	info: GraphQLResolveInfo,
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
	obj: T,
	context: TContext,
	info: GraphQLResolveInfo,
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
	TResult = {},
	TParent = {},
	TContext = {},
	TArgs = {},
> = (
	next: NextResolverFn<TResult>,
	parent: TParent,
	args: TArgs,
	context: TContext,
	info: GraphQLResolveInfo,
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
	AccessToken: ResolverTypeWrapper<AccessToken>;
	ID: ResolverTypeWrapper<Scalars["ID"]>;
	String: ResolverTypeWrapper<Scalars["String"]>;
	AuthenticationMessage: ResolverTypeWrapper<AuthenticationMessage>;
	Bookmark: ResolverTypeWrapper<Bookmark>;
	CreateBookmarkInput: CreateBookmarkInput;
	CreateOrUpdateBookmarkTagInput: CreateOrUpdateBookmarkTagInput;
	FilterBookmarksTagInput: FilterBookmarksTagInput;
	LoginMessage: ResolverTypeWrapper<LoginMessage>;
	Mutation: ResolverTypeWrapper<{}>;
	Boolean: ResolverTypeWrapper<Scalars["Boolean"]>;
	Query: ResolverTypeWrapper<{}>;
	Int: ResolverTypeWrapper<Scalars["Int"]>;
	RenameTagInput: RenameTagInput;
	Tag: ResolverTypeWrapper<Tag>;
	UpdateBookmarkInput: UpdateBookmarkInput;
	User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
	AccessToken: AccessToken;
	ID: Scalars["ID"];
	String: Scalars["String"];
	AuthenticationMessage: AuthenticationMessage;
	Bookmark: Bookmark;
	CreateBookmarkInput: CreateBookmarkInput;
	CreateOrUpdateBookmarkTagInput: CreateOrUpdateBookmarkTagInput;
	FilterBookmarksTagInput: FilterBookmarksTagInput;
	LoginMessage: LoginMessage;
	Mutation: {};
	Boolean: Scalars["Boolean"];
	Query: {};
	Int: Scalars["Int"];
	RenameTagInput: RenameTagInput;
	Tag: Tag;
	UpdateBookmarkInput: UpdateBookmarkInput;
	User: User;
};

export type AccessTokenResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["AccessToken"] = ResolversParentTypes["AccessToken"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	lastUsed?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	scopes?: Resolver<Array<ResolversTypes["String"]>, ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type AuthenticationMessageResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["AuthenticationMessage"] = ResolversParentTypes["AuthenticationMessage"],
> = {
	code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type BookmarkResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Bookmark"] = ResolversParentTypes["Bookmark"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	tags?: Resolver<Array<ResolversTypes["Tag"]>, ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	updatedAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type LoginMessageResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["LoginMessage"] = ResolversParentTypes["LoginMessage"],
> = {
	code?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	message?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	accessToken?: Resolver<
		Maybe<ResolversTypes["String"]>,
		ParentType,
		ContextType
	>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"],
> = {
	createBookmark?: Resolver<
		ResolversTypes["Bookmark"],
		ParentType,
		ContextType,
		RequireFields<MutationCreateBookmarkArgs, "input">
	>;
	updateBookmark?: Resolver<
		ResolversTypes["Bookmark"],
		ParentType,
		ContextType,
		RequireFields<MutationUpdateBookmarkArgs, "input">
	>;
	renameTag?: Resolver<
		ResolversTypes["Tag"],
		ParentType,
		ContextType,
		RequireFields<MutationRenameTagArgs, never>
	>;
	deleteTag?: Resolver<
		ResolversTypes["Boolean"],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteTagArgs, "id">
	>;
	deleteBookmark?: Resolver<
		ResolversTypes["Boolean"],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteBookmarkArgs, "id">
	>;
	generateToken?: Resolver<
		ResolversTypes["AccessToken"],
		ParentType,
		ContextType,
		RequireFields<MutationGenerateTokenArgs, "name" | "scopes">
	>;
	updateToken?: Resolver<
		Maybe<ResolversTypes["AccessToken"]>,
		ParentType,
		ContextType,
		RequireFields<MutationUpdateTokenArgs, "id" | "scopes">
	>;
	deleteToken?: Resolver<
		ResolversTypes["Boolean"],
		ParentType,
		ContextType,
		RequireFields<MutationDeleteTokenArgs, "id">
	>;
};

export type QueryResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"],
> = {
	bookmark?: Resolver<
		ResolversTypes["Bookmark"],
		ParentType,
		ContextType,
		RequireFields<QueryBookmarkArgs, "id">
	>;
	bookmarks?: Resolver<
		Array<ResolversTypes["Bookmark"]>,
		ParentType,
		ContextType,
		RequireFields<QueryBookmarksArgs, never>
	>;
	tag?: Resolver<
		ResolversTypes["Tag"],
		ParentType,
		ContextType,
		RequireFields<QueryTagArgs, "id">
	>;
	tagBookmarksCount?: Resolver<
		ResolversTypes["Int"],
		ParentType,
		ContextType,
		RequireFields<QueryTagBookmarksCountArgs, "id">
	>;
	tags?: Resolver<Maybe<Array<ResolversTypes["Tag"]>>, ParentType, ContextType>;
	user?: Resolver<Maybe<ResolversTypes["User"]>, ParentType, ContextType>;
	tokens?: Resolver<
		Array<ResolversTypes["AccessToken"]>,
		ParentType,
		ContextType
	>;
	token?: Resolver<
		ResolversTypes["AccessToken"],
		ParentType,
		ContextType,
		RequireFields<QueryTokenArgs, "id">
	>;
};

export type TagResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["Tag"] = ResolversParentTypes["Tag"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserResolvers<
	ContextType = any,
	ParentType extends ResolversParentTypes["User"] = ResolversParentTypes["User"],
> = {
	id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
	email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	emailVerified?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
	createdAt?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
	__isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
	AccessToken?: AccessTokenResolvers<ContextType>;
	AuthenticationMessage?: AuthenticationMessageResolvers<ContextType>;
	Bookmark?: BookmarkResolvers<ContextType>;
	LoginMessage?: LoginMessageResolvers<ContextType>;
	Mutation?: MutationResolvers<ContextType>;
	Query?: QueryResolvers<ContextType>;
	Tag?: TagResolvers<ContextType>;
	User?: UserResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

export const CreateBookmarkDocument = `
    mutation CreateBookmark($input: CreateBookmarkInput!) {
  createBookmark(input: $input) {
    id
    title
    url
    tags {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;
export const useCreateBookmarkMutation = <TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<
		CreateBookmarkMutation,
		TError,
		CreateBookmarkMutationVariables,
		TContext
	>,
) =>
	useMutation<
		CreateBookmarkMutation,
		TError,
		CreateBookmarkMutationVariables,
		TContext
	>(
		(variables?: CreateBookmarkMutationVariables) =>
			fetcher<CreateBookmarkMutation, CreateBookmarkMutationVariables>(
				CreateBookmarkDocument,
				variables,
			)(),
		options,
	);
export const DeleteBookmarkDocument = `
    mutation DeleteBookmark($id: ID!) {
  deleteBookmark(id: $id)
}
    `;
export const useDeleteBookmarkMutation = <TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<
		DeleteBookmarkMutation,
		TError,
		DeleteBookmarkMutationVariables,
		TContext
	>,
) =>
	useMutation<
		DeleteBookmarkMutation,
		TError,
		DeleteBookmarkMutationVariables,
		TContext
	>(
		(variables?: DeleteBookmarkMutationVariables) =>
			fetcher<DeleteBookmarkMutation, DeleteBookmarkMutationVariables>(
				DeleteBookmarkDocument,
				variables,
			)(),
		options,
	);
export const DeleteTagDocument = `
    mutation DeleteTag($id: ID!) {
  deleteTag(id: $id)
}
    `;
export const useDeleteTagMutation = <TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<
		DeleteTagMutation,
		TError,
		DeleteTagMutationVariables,
		TContext
	>,
) =>
	useMutation<DeleteTagMutation, TError, DeleteTagMutationVariables, TContext>(
		(variables?: DeleteTagMutationVariables) =>
			fetcher<DeleteTagMutation, DeleteTagMutationVariables>(
				DeleteTagDocument,
				variables,
			)(),
		options,
	);
export const GenerateTokenDocument = `
    mutation GenerateToken($name: String!, $scopes: [String!]!) {
  generateToken(name: $name, scopes: $scopes) {
    id
    name
    lastUsed
  }
}
    `;
export const useGenerateTokenMutation = <TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<
		GenerateTokenMutation,
		TError,
		GenerateTokenMutationVariables,
		TContext
	>,
) =>
	useMutation<
		GenerateTokenMutation,
		TError,
		GenerateTokenMutationVariables,
		TContext
	>(
		(variables?: GenerateTokenMutationVariables) =>
			fetcher<GenerateTokenMutation, GenerateTokenMutationVariables>(
				GenerateTokenDocument,
				variables,
			)(),
		options,
	);
export const RenameTagDocument = `
    mutation RenameTag($input: RenameTagInput) {
  renameTag(input: $input) {
    id
  }
}
    `;
export const useRenameTagMutation = <TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<
		RenameTagMutation,
		TError,
		RenameTagMutationVariables,
		TContext
	>,
) =>
	useMutation<RenameTagMutation, TError, RenameTagMutationVariables, TContext>(
		(variables?: RenameTagMutationVariables) =>
			fetcher<RenameTagMutation, RenameTagMutationVariables>(
				RenameTagDocument,
				variables,
			)(),
		options,
	);
export const UpdateBookmarkDocument = `
    mutation UpdateBookmark($input: UpdateBookmarkInput!) {
  updateBookmark(input: $input) {
    id
    title
    url
    tags {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;
export const useUpdateBookmarkMutation = <TError = unknown, TContext = unknown>(
	options?: UseMutationOptions<
		UpdateBookmarkMutation,
		TError,
		UpdateBookmarkMutationVariables,
		TContext
	>,
) =>
	useMutation<
		UpdateBookmarkMutation,
		TError,
		UpdateBookmarkMutationVariables,
		TContext
	>(
		(variables?: UpdateBookmarkMutationVariables) =>
			fetcher<UpdateBookmarkMutation, UpdateBookmarkMutationVariables>(
				UpdateBookmarkDocument,
				variables,
			)(),
		options,
	);
export const GetAllBookmarksDocument = `
    query GetAllBookmarks($tag: FilterBookmarksTagInput) {
  bookmarks(tag: $tag) {
    id
    title
    url
    tags {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;
export const useGetAllBookmarksQuery = <
	TData = GetAllBookmarksQuery,
	TError = unknown,
>(
	variables?: GetAllBookmarksQueryVariables,
	options?: UseQueryOptions<GetAllBookmarksQuery, TError, TData>,
) =>
	useQuery<GetAllBookmarksQuery, TError, TData>(
		["GetAllBookmarks", variables],
		fetcher<GetAllBookmarksQuery, GetAllBookmarksQueryVariables>(
			GetAllBookmarksDocument,
			variables,
		),
		options,
	);
export const GetAllTagsDocument = `
    query GetAllTags {
  tags {
    id
    name
  }
}
    `;
export const useGetAllTagsQuery = <TData = GetAllTagsQuery, TError = unknown>(
	variables?: GetAllTagsQueryVariables,
	options?: UseQueryOptions<GetAllTagsQuery, TError, TData>,
) =>
	useQuery<GetAllTagsQuery, TError, TData>(
		["GetAllTags", variables],
		fetcher<GetAllTagsQuery, GetAllTagsQueryVariables>(
			GetAllTagsDocument,
			variables,
		),
		options,
	);
export const GetAllTokensDocument = `
    query GetAllTokens {
  tokens {
    id
    name
    scopes
    lastUsed
  }
}
    `;
export const useGetAllTokensQuery = <
	TData = GetAllTokensQuery,
	TError = unknown,
>(
	variables?: GetAllTokensQueryVariables,
	options?: UseQueryOptions<GetAllTokensQuery, TError, TData>,
) =>
	useQuery<GetAllTokensQuery, TError, TData>(
		["GetAllTokens", variables],
		fetcher<GetAllTokensQuery, GetAllTokensQueryVariables>(
			GetAllTokensDocument,
			variables,
		),
		options,
	);
export const GetBookmarkDocument = `
    query GetBookmark($id: ID!) {
  bookmark(id: $id) {
    id
    title
    url
    tags {
      id
      name
    }
    createdAt
    updatedAt
  }
}
    `;
export const useGetBookmarkQuery = <TData = GetBookmarkQuery, TError = unknown>(
	variables: GetBookmarkQueryVariables,
	options?: UseQueryOptions<GetBookmarkQuery, TError, TData>,
) =>
	useQuery<GetBookmarkQuery, TError, TData>(
		["GetBookmark", variables],
		fetcher<GetBookmarkQuery, GetBookmarkQueryVariables>(
			GetBookmarkDocument,
			variables,
		),
		options,
	);
export const GetTagDocument = `
    query GetTag($id: ID!) {
  tag(id: $id) {
    id
    name
  }
}
    `;
export const useGetTagQuery = <TData = GetTagQuery, TError = unknown>(
	variables: GetTagQueryVariables,
	options?: UseQueryOptions<GetTagQuery, TError, TData>,
) =>
	useQuery<GetTagQuery, TError, TData>(
		["GetTag", variables],
		fetcher<GetTagQuery, GetTagQueryVariables>(GetTagDocument, variables),
		options,
	);
export const GetTagBookmarksCountDocument = `
    query GetTagBookmarksCount($id: ID!) {
  tagBookmarksCount(id: $id)
}
    `;
export const useGetTagBookmarksCountQuery = <
	TData = GetTagBookmarksCountQuery,
	TError = unknown,
>(
	variables: GetTagBookmarksCountQueryVariables,
	options?: UseQueryOptions<GetTagBookmarksCountQuery, TError, TData>,
) =>
	useQuery<GetTagBookmarksCountQuery, TError, TData>(
		["GetTagBookmarksCount", variables],
		fetcher<GetTagBookmarksCountQuery, GetTagBookmarksCountQueryVariables>(
			GetTagBookmarksCountDocument,
			variables,
		),
		options,
	);
export const GetTokenDocument = `
    query GetToken($id: ID!) {
  token(id: $id) {
    id
    name
    scopes
    lastUsed
  }
}
    `;
export const useGetTokenQuery = <TData = GetTokenQuery, TError = unknown>(
	variables: GetTokenQueryVariables,
	options?: UseQueryOptions<GetTokenQuery, TError, TData>,
) =>
	useQuery<GetTokenQuery, TError, TData>(
		["GetToken", variables],
		fetcher<GetTokenQuery, GetTokenQueryVariables>(GetTokenDocument, variables),
		options,
	);
export const UserDocument = `
    query User {
  user {
    id
    email
    emailVerified
    createdAt
  }
}
    `;
export const useUserQuery = <TData = UserQuery, TError = unknown>(
	variables?: UserQueryVariables,
	options?: UseQueryOptions<UserQuery, TError, TData>,
) =>
	useQuery<UserQuery, TError, TData>(
		["User", variables],
		fetcher<UserQuery, UserQueryVariables>(UserDocument, variables),
		options,
	);
