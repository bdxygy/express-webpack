import { Router } from "express";

const frontRouter: Router = Router();

frontRouter.get("/", (req, res) => {
  res.write("This is Router Front!");
  res.end();
});

export default frontRouter;
