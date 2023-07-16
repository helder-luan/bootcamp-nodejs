import { MySqlDataBase } from "../connections/data/mysqlDatabase";
import { ClienteModel } from "../models/clienteModel";

export class ClienteRepository {
  db = MySqlDataBase.getInstance();
  tableName = 'cliente';

  async listar() {
    return ClienteModel.findAll();
  }

  async obterPorId(id) {
    return ClienteModel.findByPk(id);
  }

  async salvar(cliente) {
    return ClienteModel.create(cliente);
  }

  async alterar(cliente) {
    return ClienteModel.update(cliente, {
      where: {
        cliente_id: cliente.id
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