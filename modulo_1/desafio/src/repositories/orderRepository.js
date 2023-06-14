import { path, readFile, writeFile } from '../providers/fileProvider.js';

async function read() {
  const orders = JSON.parse(await readFile(path));

  return orders;
}

async function readOne(orderId) {
  const { pedidos } = await read();

  const order = pedidos.find(o => o.id == orderId);

  return order;
}

async function readOneIndex(orderId) {
  const { pedidos } = await read();

  const index = pedidos.findIndex(order => order.id == orderId);

  return index;
}

async function create(order) {
  const ordersData = await read();

  const newOrder = {
    id: ordersData.nextId++,
    cliente: order.cliente,
    produto: order.produto,
    valor: order.valor,
    entregue: order.entregue,
    timestamp: order.timestamp
  };

  ordersData.pedidos.push(newOrder);

  await writeFile(path, JSON.stringify(ordersData));

  return newOrder;
}

async function update(order) {
  const ordersData = await read();

  const index = await readOneIndex(order.id);

  if (index < 0) {
    throw new Error('Order not found');
  }

  const updatedOrder = {
    id: order.id,
    cliente: order.cliente,
    produto: order.produto,
    valor: order.valor,
    entregue: order.entregue,
    timestamp: order.timestamp
  }

  ordersData.pedidos[index] = updatedOrder;

  await writeFile(path, JSON.stringify(ordersData));

  return updatedOrder;
}

async function updateStatus(order) {
  const ordersData = await read();

  const index = await readOneIndex(order.id);

  if (index < 0) {
    throw new Error('Order not found');
  }

  ordersData.pedidos[index].entregue = order.entregue;

  await writeFile(path, JSON.stringify(ordersData));
}

async function remove(orderId) {
  const ordersData = await read();

  const orders = ordersData.pedidos.filter(order => order.id != orderId);

  ordersData.pedidos = orders;

  await writeFile(path, JSON.stringify(ordersData));
}

async function totalByClient(client) {
  const ordersData = await read();

  const orders = ordersData.pedidos.filter(order => order.cliente?.toLowerCase() == client && order.entregue == true);

  const total = orders.reduce((acc, order) => acc + order.valor, 0);

  return total;
}

async function totalByProduct(product) {
  const ordersData = await read();

  const orders = ordersData.pedidos.filter(order => order.produto?.toLowerCase() == product && order.entregue == true);

  const total = orders.reduce((acc, order) => acc + order.valor, 0);

  return total;
}

async function topSales() {
  const ordersData = await read();

  const orders = ordersData.pedidos.filter(order => order.entregue == true);

  const products = orders.map(order => order.produto);

  const productsSet = new Set(products);

  const productsArray = [...productsSet];

  const productsSales = productsArray.map(product => {
    const quantity = products.filter(p => p == product).length;

    return {
      produto: product,
      quantidade: quantity
    }
  });

  const orderedProductsSales = productsSales.sort((a, b) => b.quantidade - a.quantidade);
  
  return orderedProductsSales;
}

export default {
  readOne,
  create,
  update,
  updateStatus,
  remove,
  totalByClient,
  totalByProduct,
  topSales
}