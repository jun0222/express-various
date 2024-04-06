import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "../schema";
import resolvers from "../resolvers";
import morgan from "morgan";

const app = express();
const port = 4000;

// morganを使用してリクエストログを出力
app.use(morgan("dev"));

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
