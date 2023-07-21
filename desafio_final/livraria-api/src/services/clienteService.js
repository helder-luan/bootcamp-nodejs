import ClienteRepository from "../repositories/clienteRepository.js";
import VendaService from "./vendaService.js";

class ClienteService {
  async listar() {
    const clientes = await ClienteRepository.listar();

    clientes.forEach(cliente => {
      delete cliente.dataValues.senha;
    });

    return clientes;
  }

  async obterPorId(id) {
    const cliente = await ClienteRepository.obterPorId(id);

    delete cliente.dataValues.senha;

    return cliente;
  }

  async salvar(model) {
    return await ClienteRepository.salvar(model);
  }

  async alterar(model) {
    return await ClienteRepository.alterar(model);
  }

  async excluir(id) {
    const vendasDoCliente = await VendaService.obterPorClienteId(id);

    if (vendasDoCliente.length > 0) {
      throw new Error("Não é possível excluir um cliente que possui vendas.");
    }

    return await ClienteRepository.excluir(id);
  }

  async obterPorEmail(email) {
    return await ClienteRepository.obterPorEmail(email);
  }
}

export default new ClienteService();