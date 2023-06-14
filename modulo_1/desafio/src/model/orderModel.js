export const orderModel = {
  async create({ cliente, produto, valor }) {

    return {
      cliente,
      produto,
      valor,
      entregue: false,
      timestamp: new Date()
    };
  }
}