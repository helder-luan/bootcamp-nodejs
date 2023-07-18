import AutorRepository from "../repositories/autorRepository.js";

class AutorService {
  constructor(classRepository) {
    this.repository = classRepository;
  }

  async listar() {
    return await this.repository.listar();
  }

  async obterPorId(id) {
    return await this.repository.obterPorId(id);
  }

  async salvar(model) {
    return await this.repository.salvar(model);
  }

  async alterar(model) {
    return await this.repository.alterar(model);
  }

  async excluir(id) {
    return await this.repository.excluir(id);
  }
}

export default new AutorService(AutorRepository);