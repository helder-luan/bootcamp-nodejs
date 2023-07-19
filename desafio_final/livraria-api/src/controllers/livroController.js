import LivroService from "../services/livroService.js";

class LivroController {
  async listar(req, res, next) {
    try {
      const livros = await LivroService.listar()

      res.status(200).json(livros)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async obterPorId(req, res, next) {
    try {
      const idLivro = req.params.id;

      const livro = await LivroService.obterPorId(idLivro);

      res.status(200).json(livro)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvar(req, res, next) {
    try {  
      const livro = req.body;

      const novoLivro = await LivroService.salvar(livro);

      res.status(201).json(novoLivro);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterar(req, res, next) {
    try {
      const livro = req.body;

      const livroAtualizado = await LivroService.alterar(livro);

      res.status(201).json(livroAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluir(req, res, next) {
    try {
      const idLivro = req.params.id;

      await LivroService.excluir(idLivro);

      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async obterPorAutorId(req, res, next) {
    try {

    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvarInfo(req, res, next) {
    try {

    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterarInfo(req, res, next) {
    try {

    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluirInfo(req, res, next) {
    try {

    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvarAvaliacao(req, res, next) {
    try {

    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluirAvaliacao(req, res, next) {
    try {

    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

}

export default new LivroController();