import { Router } from "express";

const adminRouter: Router = Router();

adminRouter.get("/", (req, res) => {
  res.write("This is Router Admin!");
  res.end();
});

export default adminRouter;
