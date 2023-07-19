import ClienteService from "../services/clienteService.js";

class ClienteController {
  async listar(req, res, next) {
    try {
      const clientes = await ClienteService.listar()

      res.status(200).json(clientes)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async obterPorId(req, res, next) {
    try {
      const idCliente = req.params.id;

      const cliente = await ClienteService.obterPorId(idCliente);

      res.status(200).json(cliente)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvar(req, res, next) {
    try {  
      const cliente = req.body;

      const novoCliente = await ClienteService.salvar(cliente);

      res.status(201).json(novoCliente);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterar(req, res, next) {
    try {
      const cliente = req.body;

      const clienteAtualizado = await ClienteService.alterar(cliente);

      res.status(201).json(clienteAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluir(req, res, next) {
    try {
      const idCliente = req.params.id;

      await ClienteService.excluir(idCliente);

      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default new ClienteController();