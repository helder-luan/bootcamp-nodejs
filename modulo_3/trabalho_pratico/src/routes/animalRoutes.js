import { Router } from 'express';
import animalController from '../controllers/animalController.js';

const router = Router();

router.get("/", animalController.index);

router.get("/:id", animalController.show);

router.post("/", animalController.store);

router.put("/", animalController.update);

router.delete("/:id", animalController.destroy);

router.get("/:proprietario_id", animalController.destroy);

export default router;