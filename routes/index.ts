import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../schema";
import resolvers from "../resolvers";

const app = express();
const port = 4000;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/graphql`);
});
