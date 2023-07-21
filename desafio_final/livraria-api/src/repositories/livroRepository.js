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
      editora: info.editora
    });
  }

  async alterarInfo(info) {
    await livroInfoSchema.updateOne({
      livroId: info.livroId
    }, {
      descricao: info.descricao,
      paginas: info.paginas,
      editora: info.editora
    });
  }

  async excluirInfo(id) {
    await livroInfoSchema.deleteOne({
      livroId: id
    });
  }

  async salvarAvaliacao(id, avaliacao) {
    const livroInfo = await livroInfoSchema.findOne({
      where: {
        livroId: id
      }
    });

    if (livroInfo) {
      const avaliacoes = livroInfo.avaliacoes;
      avaliacoes.push(avaliacao);

      await livroInfoSchema.updateOne({
        livroId: id
      }, {
        avaliacoes: avaliacoes
      });
    }
  }

  async excluirAvaliacao(id, index) {
    const livroInfo = await livroInfoSchema.findOne({
      where: {
        livroId: id
      }
    });

    if (livroInfo) {
      const avaliacoes = livroInfo.avaliacoes;
      const filtered = avaliacoes.filter((avaliacao, pos) => pos !== index);

      await livroInfoSchema.updateOne({
        livroId: id
      }, {
        avaliacoes: filtered
      });
    }
  }
}

export default new LivroRepository();