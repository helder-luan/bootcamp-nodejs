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

  async alterar(model) {
    return await VendaModel.update(model, {
      where: {
        venda_id: model.id
      }
    });
  }

  async excluir(id) {
    return await VendaModel.destroy({
      where: {
        venda_id: id
      }
    });
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
      where: {
        autor_id: id
      }
    });
  }

}

export default new VendaRepository();