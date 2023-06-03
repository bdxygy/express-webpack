import express, { type Application } from "express";
import { config } from "dotenv";
import path from "path";
import baseRouter from "@routes/base";
import pool from "@core/database/connection";

console.log(pool);

config({
  path: path.resolve(__dirname, `.env.${process.env.STAGE}`),
});

const app: Application = express();

app.use("/", baseRouter);

app.use((req, res) => {
  res.write("Page Not Found Again!");
  res.end();
});

app.listen(5000, () => {
  console.log(
    `Your server is Running in ${process.env.STAGING} Mode!`
  );
});
