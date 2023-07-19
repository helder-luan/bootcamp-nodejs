import VendaRepository from "../repositories/vendaRepository.js";

class VendaService {
  async listar() {
    return VendaRepository.listar();
  }

  async obterPorId(id) {
    return VendaRepository.obterPorId(id);
  }

  async salvar(model) {
    return VendaRepository.salvar(model);
  }

  async alterar(model) {
    return VendaRepository.alterar(model);
  }

  async excluir(id) {
    return VendaRepository.excluir(id);
  }

  async obterPorClienteId(id) {
    return VendaRepository.obterPorClienteId(id);
  }

  async obterPorLivroId(id) {
    return VendaRepository.obterPorLivroId(id);
  }

  async obterPorAutorId(id) {
    return VendaRepository.obterPorAutorId(id);
  }

}

export default new VendaService();