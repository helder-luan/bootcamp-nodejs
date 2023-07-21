import Auth from "../middleware/auth.js";
import Permission from "../middleware/permission.js";
import VendaService from "../services/vendaService.js";

class VendaController {
  async listar(req, res, next) {
    try {
      if (req.query.clienteId) {
        const clienteId = req.query.clienteId;

        if (Auth.usuarioAutenticado.cliente_id !== clienteId && !Permission.isAdmin()) {
          return res.status(401).end();
        }

        const vendas = await VendaService.obterPorClienteId(clienteId);
        return res.status(200).json(vendas)
      }

      if (req.query.livroId) {
        const livroId = req.query.livroId;
        const vendas = await VendaService.obterPorLivroId(livroId);
        return res.status(200).json(vendas)
      }

      if (req.query.autorId) {
        const autorId = req.query.autorId;
        const vendas = await VendaService.obterPorAutorId(autorId);
        return res.status(200).json(vendas)
      }

      const vendas = await VendaService.listar();

      res.status(200).json(vendas)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async obterPorId(req, res, next) {
    try {
      if (!Permission.isAdmin()) {
        return res.status(403).end();
      }

      const idVenda = req.params.id;

      const venda = await VendaService.obterPorId(idVenda);

      res.status(200).json(venda)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvar(req, res, next) {
    try {  
      const venda = req.body;

      const novaVenda = await VendaService.salvar(venda);

      res.status(201).json(novaVenda);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterar(req, res, next) {
    try {
      throw new Error('Method not implemented.');
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluir(req, res, next) {
    try {
      throw new Error('Method not implemented.');
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default new VendaController();