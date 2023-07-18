import ClienteRepository from "../repositories/clienteRepository.js";
import VendaService from "./vendaService.js";

class ClienteService {
  constructor(classRepository) {
    this.repository = classRepository;
  }

  async listar() {
    const clientes = await this.repository.listar();
    
    clientes.forEach(cliente => {
      delete cliente.senha;
    });

    return clientes;
  }

  async obterPorId(id) {
    const cliente = await this.repository.obterPorId(id);

    delete cliente.senha;

    return cliente;
  }

  async salvar(model) {
    return await this.repository.salvar(model);
  }

  async alterar(model) {
    return await this.repository.alterar(model);
  }

  async excluir(id) {
    const vendasDoCliente = await VendaService.obterPorClienteId(id);

    if (vendasDoCliente.length > 0) {
      throw new Error("Não é possível excluir um cliente que possui vendas.");
    }

    return await this.repository.excluir(id);
  }
}

export default new ClienteService(ClienteRepository);