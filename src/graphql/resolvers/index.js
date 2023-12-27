import { authors } from "../../db/authors"
import { books } from "../../db/books"

export const resolvers = {
    Query: {
        hello: () => 'Hello from yoga',
        books: () => books,
        authors: () => authors
    },
    Book: {
        author: ({ author }) => {
            //console.log(`author: `, author);
            return authors.find(a => a.id === author);
        }
    },
    Author: {
        books: (parent) => {
            console.log('parent: ', parent);
            return books.filter(b => b.author === parent.id)
        }
    }
}