import { ClienteRepository } from "../repositories/clienteRepository";

export class ClienteService {
  async listar() {
    return ClienteRepository.listar();
  }

  async obterPorId(id) {
    return ClienteRepository.obterPorId();
  }

  async salvar(cliente) {
    return ClienteRepository.salvar();
  }

  async alterar(cliente) {
    return ClienteRepository.alterar();
  }

  async excluir(id) {
    return ClienteRepository.excluir();
  }

}