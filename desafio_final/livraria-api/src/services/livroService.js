import LivroRepository from "../repositories/livroRepository.js";

class LivroService {
  async listar() {
    return await LivroRepository.listar();
  }

  async obterPorId(id) {
    return await LivroRepository.obterPorId(id);
  }

  async salvar(model) {
    return await LivroRepository.salvar(model);
  }

  async alterar(model) {
    return await LivroRepository.alterar(model);
  }

  async excluir(id) {
    return await LivroRepository.excluir(id);
  }

  async obterPorAutorId(id) {
    return await LivroRepository.obterPorAutorId(id);
  }

  async salvarInfo(info) {
    return await LivroRepository.salvarInfo(info);
  }

  async alterarInfo(info) {
    return await LivroRepository.alterarInfo(info);
  }

  async excluirInfo(id) {
    return await LivroRepository.excluirInfo(id);
  }

  async salvarAvaliacao(id, avaliacao) {
    return await LivroRepository.salvarAvaliacao(id, avaliacao);
  }

  async excluirAvaliacao(id, index) {
    return await LivroRepository.excluirAvaliacao(id, index);
  }
}

export default new LivroService();