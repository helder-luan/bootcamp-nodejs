import { Router } from 'express';
import logger from '../providers/winston.js';
import accountController from '../controllers/accountController.js';

const router = Router();

router.post("/", accountController.createAccount);

router.get("/", accountController.getAccounts);

router.get("/:id", accountController.getAccountById);

router.delete("/:id", accountController.deleteAccount);

router.put("/", accountController.updateAccount);

router.patch("/updateBalance", accountController.updateBalance);

router.use((err, req, res, next) => {
  logger.error(`${req.method} ${req.baseUrl} - ${err.message}`);
  res.status(400).send({ error: err.message });
});

export default router;