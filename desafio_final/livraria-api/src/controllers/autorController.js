import AutorService from "../services/autorService.js";

class AutorController {
  constructor(classService) {
    this.service = classService;
  }

  async listar(req, res, next) {
    try {
      const autores = await this.service.listar()

      res.status(200).json(autores)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async obterPorId(req, res, next) {
    try {
      const idAutor = req.params.id;

      const autor = await this.service.obterPorId(idAutor);

      res.status(200).json(idAutor)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvar(req, res, next) {
    try {  
      const autor = req.body;

      const novoAutor = await this.service.salvar(autor);

      res.status(201).json(novoAutor);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterar(req, res, next) {
    try {
      const autor = req.body;

      const autorAtualizado = await this.service.alterar(autor);

      res.status(201).json(autorAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluir(req, res, next) {
    try {
      const idAutor = req.params.id;

      await this.service.excluir(idAutor);

      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}

export default new ClienteController(ClienteService);