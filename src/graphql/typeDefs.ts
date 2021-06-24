import gql from "./gql-tag";

export default gql`
	type Bookmark {
		id: ID!
		title: String!
		url: String!
		tags: [Tag!]!
		createdAt: String!
		updatedAt: String!
	}

	type Tag {
		id: String!
		name: String!
	}

	input CreateBookmarkInput {
		title: String!
		url: String!
		tags: [String!]!
	}

	input UpdateBookmarkInput {
		title: String
		url: String
		tags: [String!]
	}

	type AuthenticationMessage {
		code: String!
		message: String!
	}

	type LoginMessage {
		code: String!
		message: String!
		accessToken: String
	}

	type User {
		id: ID!
		email: String!
		emailVerified: Boolean!
		createdAt: String!
	}

	type Query {
		bookmark(id: ID!): Bookmark!
		bookmarks(tag: String): [Bookmark!]!
		tags: [Tag!]
		user: User
	}

	type Mutation {
		login(email: String!, password: String!): LoginMessage
		register(email: String!, password: String!): AuthenticationMessage
		createBookmark(input: CreateBookmarkInput!): Bookmark
		updateBookmark(id: ID!, input: UpdateBookmarkInput!): Bookmark
		deleteBookmark(id: ID!): Boolean
	}
`;
