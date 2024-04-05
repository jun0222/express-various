import createError from "http-errors";
import express, { Express } from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";

// import indexRouter from "./routes/index";
// import usersRouter from "./routes/users";

const app: Express = express();

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
