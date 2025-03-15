import { Router } from "express";

const router = Router();

router.get("/users", (req, res) => {
  res.send("Users call");
});

router.get("/users/:id", (req, res) => {
  const { id } = req.params;
  res.send("User call " + id);
});

router.post("/users", (req, res) => {
  res.send("Create User");
});

router.delete("/users/:id", (req, res) => {
  const { id } = req.params;

  res.send("Delete User call " + id);
});

router.put("/users/:id", (req, res) => {
  const { id } = req.params;

  res.send("Update Users call " + id);
});

export default router;
