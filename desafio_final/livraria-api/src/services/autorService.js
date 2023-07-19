import AutorRepository from "../repositories/autorRepository.js";

class AutorService {
  async listar() {
    return await AutorRepository.listar();
  }

  async obterPorId(id) {
    return await AutorRepository.obterPorId(id);
  }

  async salvar(model) {
    return await AutorRepository.salvar(model);
  }

  async alterar(model) {
    return await AutorRepository.alterar(model);
  }

  async excluir(id) {
    return await AutorRepository.excluir(id);
  }
}

export default new AutorService();