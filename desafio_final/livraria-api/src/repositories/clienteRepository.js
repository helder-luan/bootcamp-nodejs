import { ClienteModel } from "../models/clienteModel.js";

class ClienteRepository {
  async listar() {
    return await ClienteModel.findAll();
  }

  async obterPorId(id) {
    return await ClienteModel.findByPk(id);
  }

  async salvar(model) {
    return await ClienteModel.create(model);
  }

  async alterar(model) {
    return await ClienteModel.update(model, {
      where: {
        cliente_id: model.id
      }
    });
  }

  async excluir(id) {
    return await ClienteModel.destroy({
      where: {
        cliente_id: id
      }
    });
  }
}

export default new ClienteRepository();