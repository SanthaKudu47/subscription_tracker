import { Router } from "express";
const userRouter = Router();

userRouter.get("/", function (req, res) {
  res.send({ title: "GET all users" });
});

userRouter.get("/:id", function (req, res) {
  const userId = req.params.id;
  res.send({ title: `GET User Details ${userId}` });
});

userRouter.post("/", function (req, res) {
  res.send({ title: `POST Create New User` });
});

userRouter.put("/:id", function (req, res) {
  const userId = req.params.id;
  res.send({ title: `PUT Update User ${userId}` });
});

userRouter.delete("/:id", function (req, res) {
  const userId = req.params.id;
  res.send({ title: "Delete User" + " " + userId });
});

export default userRouter;
