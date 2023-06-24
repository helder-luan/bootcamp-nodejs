import { Router } from 'express';
import proprietarioController from '../controllers/proprietarioController.js';

const router = Router();

router.get("/", proprietarioController.index);

router.get("/:id", proprietarioController.show);

router.post("/", proprietarioController.store);

router.put("/", proprietarioController.update);

router.delete("/:id", proprietarioController.destroy);

export default router;