import ClienteService from "../services/clienteService.js";

class ClienteController {
  constructor(classService) {
    this.service = classService;
  }

  async listar(req, res, next) {
    try {
      const clientes = await this.service.listar()

      res.status(200).json(clientes)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async obterPorId(req, res, next) {
    try {
      const idCliente = req.params.id;

      const cliente = await this.service.obterPorId(idCliente);

      res.status(200).json(cliente)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvar(req, res, next) {
    try {  
      const cliente = req.body;

      const novoCliente = await this.service.salvar(cliente);

      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterar(req, res, next) {
    try {
      const cliente = req.body;

      const clienteAtualizado = await this.service.alterar(cliente);

      res.status(201).json(clienteAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluir(req, res, next) {
    try {
      const idCliente = req.params.id;

      await this.service.excluir(idCliente);

      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default new ClienteController(ClienteService);