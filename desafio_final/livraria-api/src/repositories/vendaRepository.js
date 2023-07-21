import { VendaModel } from "../models/vendaModel.js";

class VendaRepository {
  async listar() {
    return await VendaModel.findAll();
  }

  async obterPorId(id) {
    return await VendaModel.findByPk(id);
  }

  async salvar(model) {
    return await VendaModel.create(model);
  }

  async obterPorClienteId(id) {
    return await VendaModel.findAll({
      where: {
        cliente_id: id
      }
    });
  }

  async obterPorLivroId(id) {
    return await VendaModel.findAll({
      where: {
        livro_id: id
      }
    });
  }

  async obterPorAutorId(id) {
    return await VendaModel.findAll({
      raw: true,
      attributes: ['venda.venda_id', 'venda.data', 'venda.valor', 'venda.cliente_id', 'venda.livro_id'],
      include: [
        {
          model: VendaModel.sequelize.models.livro,
          required: true,
          attributes: [],
          where: {
            autor_id: id
          }
        }
      ]
    });
  }

}

export default new VendaRepository();