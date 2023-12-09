import express from "express";
import compression from "compression";
import cors from "cors";
import schema from "./schemas";

import { graphqlHTTP } from "express-graphql";

const app = express();

app.use('*', cors());

app.use(compression());


app.use('/', graphqlHTTP({
    schema,
    graphiql: true
}));

const PORT = 5300;

app.listen(
    { port: PORT },
    () => console.log(`Hola mundo con GraphQL http://localhost:${PORT}`)
);