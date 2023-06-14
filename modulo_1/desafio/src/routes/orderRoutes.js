import { Router } from "express";
import orderController from "../controllers/orderController.js";

const router = Router();
// buscar pedido
router.get('/:id', orderController.show);

// criar pedido
router.post('/', orderController.store);

// atualizar pedido  
router.put('/', orderController.update);

// excluir um pedido
router.delete('/:id', orderController.destroy);


// atualizar status de entrega
router.patch('/updateStatus', orderController.updateStatus);

// buscar total pedidos por cliente
router.get('/client/:client/total', orderController.totalByClient);

// buscar total pedidos por produto
router.get('/product/:product/total', orderController.totalByProduct);

// retornar produtos mais vendidos
router.post('/topSales', orderController.topSales);

router.use((err, req, res, next) => {
  res.status(400).send({ error: err.message });
});

export default router;