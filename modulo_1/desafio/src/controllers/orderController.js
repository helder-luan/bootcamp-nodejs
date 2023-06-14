import { orderModel } from "../model/orderModel.js";
import orderService from "../services/orderService.js";

async function index(req, res, next) {}

async function show(req, res, next) {
  try {
    const orderId = req.params.id;

    if (!orderId || orderId < 0) {
      throw new Error('Order not indentified');
    }

    const order = await orderService.show(orderId);

    res.send(order);
  } catch (error) {
    next(error);
  }
}

async function store(req, res, next) {
  try {
    const order = req.body;

    if (!order.cliente || order.cliente.trim() === '') {
      throw new Error('The order must have a client');
    }

    if (!order.produto || order.cliente.trim() === '') {
      throw new Error('The order must have a product');
    }

    if (!order.valor || order.valor < 0) {
      throw new Error('The order must have a value');
    }

    const newOrder = await orderModel.create(order);

    const orderRegistered = await orderService.store(newOrder);

    res.status(201).send(orderRegistered);
  } catch (error) {
    next(error);
  }
}

async function update(req, res, next) {
  try {
    const order = req.body;

    if (!order.id || order.id < 0) {
      throw new Error('Order not indentified');
    }

    if (!order.cliente || order.cliente.trim() === '') {
      throw new Error('The order must have a client');
    }

    if (!order.produto || order.cliente.trim() === '') {
      throw new Error('The order must have a product');
    }

    if (!order.valor || order.valor < 0) {
      throw new Error('The order must have a value');
    }

    if (!order.entregue || order.entregue === undefined) {
      throw new Error('The order must have a status');
    }

    const newOrder = await orderModel.create(order);

    const updatedOrder = await orderService.update(newOrder);

    res.status(201).send(updatedOrder);
  } catch (error) {
    next(error);
  }
}

async function updateStatus(req, res, next) {
  try {
    const order = req.body;

    if (!order.id || order.id < 0) {
      throw new Error('Order not indentified');
    }

    if (!order.entregue || order.entregue === undefined) {
      throw new Error('The order must have a status');
    }

    await orderService.updateStatus(order);

    res.status(204).send();
  } catch (error) {
    next(error); 
  }
}

async function destroy(req, res, next) {
  try {
    const orderId = req.params.id;

    if (!orderId || orderId < 0) {
      throw new Error('Order not indentified');
    }

    await orderService.destroy(orderId);

    res.status(204).send();
  } catch (error) {
    next(error);
  }
}

async function totalByClient(req, res, next) {
  try {
    const client = req.params.client;

    if (!client || client.trim() === '') {
      throw new Error('The order must have a client');
    }

    const total = await orderService.totalByClient(client?.toLowerCase());

    res.status(200).send({ client, total });
  } catch (error) {
    next(error);
  }
}

async function totalByProduct(req, res, next) {
  try {
    const product = req.params.product;

    if (!product || product.trim() === '') {
      throw new Error('The order must have a product');
    }

    const total = await orderService.totalByProduct(product?.toLowerCase());

    res.status(200).send({ product, total });
  } catch (error) {
    next(error);
  }
}

async function topSales(req, res, next) {
  try {
    const topSales = await orderService.topSales();

    res.status(200).send(topSales);
  } catch (error) {
    next(error);
  }
}

export default {
  index,
  show,
  store,
  update,
  updateStatus,
  destroy,
  totalByClient,
  totalByProduct,
  topSales
}