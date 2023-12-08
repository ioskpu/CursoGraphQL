import express from "express";
import compression from "compression";
import cors from "cors";
import { makeExecutableSchema} from "graphql-tools";
import { IResolvers } from "@graphql-tools/utils";
import { GraphQLSchema } from "graphql";
import { graphqlHTTP } from "express-graphql";

const app = express();

app.use('*', cors());

app.use(compression());

const typeDefs = `
    type Query {
        hola: String!
        holaConNombre(nombre: String!): String!
        holaAlCursoGraphQL: String!
    }
`;

const resolvers : IResolvers = {
    Query : {
        hola(): string {
            return 'Hola Mundo!!'
        },
        holaConNombre(__: void, { nombre } ): string {
            return `Hola Mundo ${nombre}`;
        },
        holaAlCursoGraphQL(): string {
            return 'Hola Mundo curso GraphQL';
        }
    }
}

const schema: GraphQLSchema = makeExecutableSchema({
    typeDefs,
    resolvers
})

app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 5300;

app.listen(
    { port: PORT },
    () => console.log(`Hola mundo con GraphQL http://localhost:${PORT}`)
);