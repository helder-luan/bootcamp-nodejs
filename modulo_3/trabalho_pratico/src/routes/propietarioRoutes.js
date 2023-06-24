import { Router} from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("Hello World");
});

router.get("/:id", (req, res) => {
  res.send("Hello World");
});

router.post("/", (req, res) => {});

router.put("/", (req, res) => {});

router.delete("/:id", (req, res) => {});

export default router;