import { LivroModel } from "../models/livroModel.js";

class LivroRepository {
  async listar() {
    return LivroModel.findAll();
  }

  async obterPorId(id) {
    return LivroModel.findByPk(id);
  }

  async salvar(model) {
    return LivroModel.create(model);
  }

  async alterar(model) {
    return LivroModel.update(model, {
      where: {
        livro_id: model.id
      }
    });
  }

  async excluir(id) {
    return LivroModel.destroy({
      where: {
        livro_id: id
      }
    });
  }

  async obterPorAutorId() {
    
  }

  async salvarInfo() {
    
  }

  async alterarInfo() {
    
  }

  async excluirInfo() {
    
  }

  async salvarAvaliacao() {
    
  }

  async excluirAvaliacao() {
    
  }

}

export default new LivroRepository();