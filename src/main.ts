import express, { type Application } from "express";
import { config } from "dotenv";
import path from "path";
import adminRouter from "@routes/admin";
import frontRouter from "@routes/front";

config({
  path: path.resolve(__dirname, `.env.${process.env.STAGE}`),
});

const app: Application = express();

app.use("/admin", adminRouter);
app.use("/", frontRouter);
app.use((req, res) => {
  res.write("Page Not Found Again!");
  res.end();
});

app.listen(5000, () => {
  console.log(`Your server is Running in ${process.env.STAGING} Mode! Please Aware Again`);
});
