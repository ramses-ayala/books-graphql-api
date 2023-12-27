export const typeDefs = `
    type Query {
        hello: String!
        books: [Book!]!
        authors: [Author!]!
    }

    type Book{
        id: ID!
        title: String!
        author: Author!
    }

    type Author{
        id: ID!
        name:  String!
        books: [Book!]
    }
`;