import orderRepository from "../repositories/orderRepository.js";

async function index() {}

async function show(orderId) {
  return await orderRepository.readOne(orderId);
}

async function store(order) {
  return await orderRepository.create(order);
}

async function update(order) {
  return await orderRepository.update(order);
}

async function updateStatus(order) {
  return await orderRepository.updateStatus(order);
}

async function destroy(orderId) {
  return await orderRepository.remove(orderId);
}

async function totalByClient(client) {
  return await orderRepository.totalByClient(client);
}

async function totalByProduct(product) {
  return await orderRepository.totalByProduct(product);
}

async function topSales() {
  return await orderRepository.topSales();
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