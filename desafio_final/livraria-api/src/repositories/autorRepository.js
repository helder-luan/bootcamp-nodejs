import { AutorModel } from "../models/autorModel.js";

class AutorRepository {
  async listar() {
    return await AutorModel.findAll();
  }

  async obterPorId(id) {
    return await AutorModel.findByPk(id);
  }

  async salvar(model) {
    return await AutorModel.create(model);
  }

  async alterar(model) {
    return await AutorModel.update(model, {
      where: {
        autor_id: model.id
      }
    });
  }

  async excluir(id) {
    return await AutorModel.destroy({
      where: {
        autor_id: id
      }
    });
  }
}

export default new AutorRepository();