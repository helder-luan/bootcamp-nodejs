import { LivroModel } from "../models/livroModel.js";
import { livroInfoSchema } from "../schemas/livroInfo.js";

class LivroRepository {
  async listar() {
    return await LivroModel.findAll();
  }

  async obterPorId(id) {
    return await LivroModel.findByPk(id);
  }

  async salvar(model) {
    return await LivroModel.create(model);
  }

  async alterar(model) {
    return await LivroModel.update(model, {
      where: {
        livro_id: model.id
      }
    });
  }

  async excluir(id) {
    return await LivroModel.destroy({
      where: {
        livro_id: id
      }
    });
  }

  async obterPorAutorId(id) {
    return await LivroModel.findAll({
      where: {
        autor_id: id
      }
    });
  }

  async salvarInfo(info) {
    await livroInfoSchema.create({
      livroId: info.livroId,
      descricao: info.descricao,
      paginas: info.paginas,
      editora: info.editora,
      avaliacoes: info.avaliacoes
    });
  }

  async alterarInfo(info) {
    await livroInfoSchema.update({
      livroId: info.livroId,
      descricao: info.descricao,
      paginas: info.paginas,
      editora: info.editora,
      avaliacoes: info.avaliacoes
    }, {
      where: {
        livroId: info.livroId
      }
    });
  }

  async excluirInfo(id) {
    await livroInfoSchema.destroy({
      where: {
        livroId: id
      }
    });
  }

  async salvarAvaliacao(id, avaliacao) {
    await livroInfoSchema.update({
      avaliacoes: avaliacao
    }, {
      where: {
        livroId: id
      }
    });
  }

  async excluirAvaliacao(id, avaliacao) {
    await livroInfoSchema.update({
      avaliacoes: avaliacao
    }, {
      where: {
        livroId: id
      }
    });
  }
}

export default new LivroRepository();