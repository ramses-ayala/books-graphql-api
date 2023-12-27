import { createServer } from "node:http";
import { createYoga, createSchema } from "graphql-yoga";

//
import { typeDefs } from "./graphql/typeDefs";
import { resolvers } from "./graphql/resolvers";

const yoga = createYoga({

    schema: createSchema({
        typeDefs,
        resolvers
    })
    
});

const server = createServer(yoga);

server.listen(4000, () => {
    console.info('Server is running on http://localhost:4000/graphql');
});