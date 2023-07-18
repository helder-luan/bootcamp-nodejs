import { VendaModel } from "../models/vendaModel.js";

class VendaRepository {
  constructor(classModel) {
    this.model = classModel;
  }

  async listar() {
    return this.model.findAll();
  }

  async obterPorId(id) {
    return this.model.findByPk(id);
  }

  async salvar(model) {
    return this.model.create(model);
  }

  async alterar(model) {
    return this.model.update(model, {
      where: {
        venda_id: model.id
      }
    });
  }

  async excluir(id) {
    return this.model.destroy({
      where: {
        venda_id: id
      }
    });
  }

  async obterPorClienteId(id) {
    return this.model.findAll({
      where: {
        cliente_id: id
      }
    });
  }

  async obterPorLivroId(id) {
    return this.model.findAll({
      where: {
        livro_id: id
      }
    });
  }

  async obterPorAutorId(id) {
    return this.model.findAll({
      where: {
        autor_id: id
      }
    });
  }

}

export default new VendaRepository(VendaModel);