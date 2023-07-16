import { ClienteService } from "../services/clienteService";

export class ClienteController {
  async listar(req, res, next) {
    return ClienteService.listar();
  }

  async obterPorId(req, res, next) {
    return ClienteService.obterPorId(idCliente);
  }

  async salvar(req, res, next) {
    return ClienteService.salvar(cliente);
  }

  async alterar(req, res, next) {
    return ClienteService.alterar(cliente);
  }

  async excluir(req, res, next) {
    return ClienteService.excluir(idCliente);
  }
}