import createError from "http-errors";
import express, { Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import resolvers from "./resolvers";

// import indexRouter from "./routes/index";
// import usersRouter from "./routes/users";

const app: Express = express();

// GraphQLのエンドポイントを設定
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true, // 開発用のUIを有効にする
  })
);

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// 以下にルーターの設定を追加します
// app.use('/', indexRouter);
// app.use('/users', usersRouter);

export default app;
