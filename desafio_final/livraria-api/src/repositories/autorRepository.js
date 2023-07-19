import { AutorModel } from "../models/autorModel.js";

class AutorRepository {
  async listar() {
    return AutorModel.findAll();
  }

  async obterPorId(id) {
    return AutorModel.findByPk(id);
  }

  async salvar(model) {
    return AutorModel.create(model);
  }

  async alterar(model) {
    return AutorModel.update(model, {
      where: {
        autor_id: model.id
      }
    });
  }

  async excluir(id) {
    return AutorModel.destroy({
      where: {
        autor_id: id
      }
    });
  }
}

export default new AutorRepository();