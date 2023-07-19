import { ClienteModel } from "../models/clienteModel.js";

class ClienteRepository {
  async listar() {
    return ClienteModel.findAll();
  }

  async obterPorId(id) {
    return ClienteModel.findByPk(id);
  }

  async salvar(model) {
    return ClienteModel.create(model);
  }

  async alterar(model) {
    return ClienteModel.update(model, {
      where: {
        cliente_id: model.id
      }
    });
  }

  async excluir(id) {
    return ClienteModel.destroy({
      where: {
        cliente_id: id
      }
    });
  }
}

export default new ClienteRepository();