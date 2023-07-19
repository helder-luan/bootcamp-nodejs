import { VendaModel } from "../models/vendaModel.js";

class VendaRepository {
  async listar() {
    return VendaModel.findAll();
  }

  async obterPorId(id) {
    return VendaModel.findByPk(id);
  }

  async salvar(model) {
    return VendaModel.create(model);
  }

  async alterar(model) {
    return VendaModel.update(model, {
      where: {
        venda_id: model.id
      }
    });
  }

  async excluir(id) {
    return VendaModel.destroy({
      where: {
        venda_id: id
      }
    });
  }

  async obterPorClienteId(id) {
    return VendaModel.findAll({
      where: {
        cliente_id: id
      }
    });
  }

  async obterPorLivroId(id) {
    return VendaModel.findAll({
      where: {
        livro_id: id
      }
    });
  }

  async obterPorAutorId(id) {
    return VendaModel.findAll({
      where: {
        autor_id: id
      }
    });
  }

}

export default new VendaRepository();