import { AutorModel } from "../models/autorModel.js";

class AutorRepository {
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
        autor_id: model.id
      }
    });
  }

  async excluir(id) {
    return this.model.destroy({
      where: {
        autor_id: id
      }
    });
  }
}

export default new AutorRepository(AutorModel);