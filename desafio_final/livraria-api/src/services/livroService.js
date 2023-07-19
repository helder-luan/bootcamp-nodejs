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

  async salvarInfo() {
    return await LivroRepository.salvarInfo();
  }

  async alterarInfo() {
    return await LivroRepository.alterarInfo();
  }

  async excluirInfo() {
    return await LivroRepository.excluirInfo();
  }

  async salvarAvaliacao() {
    return await LivroRepository.salvarAvaliacao();
  }

  async excluirAvaliacao() {
    return await LivroRepository.excluirAvaliacao();
  }
}

export default new LivroService();