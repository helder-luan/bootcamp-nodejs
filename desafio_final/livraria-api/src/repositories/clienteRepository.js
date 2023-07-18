import { ClienteModel } from "../models/clienteModel.js";

class ClienteRepository {
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
        cliente_id: model.id
      }
    });
  }

  async excluir(id) {
    return this.model.destroy({
      where: {
        cliente_id: id
      }
    });
  }
}

export default new ClienteRepository(ClienteModel);