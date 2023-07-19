import AutorService from "../services/autorService.js";

class AutorController {
  async listar(req, res, next) {
    try {
      const autores = await AutorService.listar()

      res.status(200).json(autores)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async obterPorId(req, res, next) {
    try {
      const idAutor = req.params.id;

      const autor = await AutorService.obterPorId(idAutor);

      res.status(200).json(autor)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvar(req, res, next) {
    try {  
      const autor = req.body;

      const novoAutor = await AutorService.salvar(autor);

      res.status(201).json(novoAutor);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterar(req, res, next) {
    try {
      const autor = req.body;

      const autorAtualizado = await AutorService.alterar(autor);

      res.status(201).json(autorAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluir(req, res, next) {
    try {
      const idAutor = req.params.id;

      await AutorService.excluir(idAutor);

      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default new AutorController();