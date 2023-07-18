import VendaRepository from "../repositories/vendaRepository.js";

class VendaService {
  constructor(classRepository) {
    this.repository = classRepository;
  }

  async listar() {
    return this.repository.listar();
  }

  async obterPorId(id) {
    return this.repository.obterPorId(id);
  }

  async salvar(model) {
    return this.repository.salvar(model);
  }

  async alterar(model) {
    return this.repository.alterar(model);
  }

  async excluir(id) {
    return this.repository.excluir(id);
  }

  async obterPorClienteId(id) {
    return this.repository.obterPorClienteId(id);
  }

  async obterPorLivroId(id) {
    return this.repository.obterPorLivroId(id);
  }

  async obterPorAutorId(id) {
    return this.repository.obterPorAutorId(id);
  }

}

export default new VendaService(VendaRepository);