import { authors } from "../../db/authors"
import { books } from "../../db/books"
import { reviews } from "../../db/reviews";

export const resolvers = {
    Query: {
        hello: () => 'Hello from yoga',
        books: () => books,
        authors: () => authors,
        reviews: () => reviews
    },
    Book: {
        author: ({ author }) => {
            //console.log(`author: `, author);
            return authors.find(a => a.id === author);
        },

        reviews: (parent) => {
            return reviews.filter(review => review.book === parent.id);
        }
    },
    Author: {
        books: (parent) => {
            //console.log('parent: ', parent);
            return books.filter(b => b.author === parent.id)
        }
    },
    Review: {
        books: (parent) => {
            return books.find(b => b.id === parent.id);
        }
    }
}