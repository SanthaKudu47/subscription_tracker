import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", function (req, res) {
  res.send({
    title: "GET all subscriptions",
  });
});

subscriptionRouter.get("/:id", function (req, res) {
  const subscriptionId = req.params.id;
  res.send({ title: "GET subscription" + " " + subscriptionId });
});

subscriptionRouter.post("/", function (req, res) {
  res.send({ title: "POST create new subscription" });
});
subscriptionRouter.put("/:id", function (req, res) {
  const subscriptionId = req.params.id;
  res.send({ title: `UPDATE Subscription ${subscriptionId}` });
});
subscriptionRouter.delete("/:id", function (req, res) {
  const subscriptionId = req.params.id;
  res.send(`DELETE Subscription ${subscriptionId}`);
});

subscriptionRouter.get("/user/:id", function (req, res) {
  const userId = req.params.id;
  res.send({
    title: `GET all the Subscriptions for specific User ${userId}`,
  });
});

subscriptionRouter.put("/:id/cancel", function (req, res) {
  const subscriptionId = req.params.id;
  res.send({title:`CANCEL Subscription for specific User ${subscriptionId}`});
});

subscriptionRouter.get("/upcoming-renewals", function (req, res) {
  res.send({
    title: `GET all renewals`,
  });
});

export default subscriptionRouter;
