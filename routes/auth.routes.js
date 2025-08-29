import { Router } from "express";
const authRouter = Router();

authRouter.post("/sign-up", function (req, res) {
  res.send({ title: "Sign up" });
});

authRouter.post("/sign-in", function (req, res) {
  res.send({ title: "Sign In" });
});

authRouter.post("/sign-out", function (req, res) {
  res.send({ title: "Sign Out" });
});

export default authRouter;
