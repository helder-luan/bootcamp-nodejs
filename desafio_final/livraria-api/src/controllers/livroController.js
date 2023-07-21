import Permission from "../middleware/permission.js";
import LivroService from "../services/livroService.js";

class LivroController {
  async listar(req, res, next) {
    try {
      if (req.query.autorId) {
        const autorId = req.query.autorId;
        const livros = await LivroService.obterPorAutorId(autorId);

        return res.status(200).json(livros);
      }

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
      if (!Permission.isAdmin()) {
        return res.status(403).end();
      }

      const livro = req.body;

      const novoLivro = await LivroService.salvar(livro);

      res.status(201).json(novoLivro);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterar(req, res, next) {
    try {
      if (!Permission.isAdmin()) {
        return res.status(403).end();
      }

      const livro = req.body;

      const livroAtualizado = await LivroService.alterar(livro);

      res.status(201).json(livroAtualizado);
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluir(req, res, next) {
    try {
      if (!Permission.isAdmin()) {
        return res.status(403).end();
      }

      const idLivro = req.params.id;

      await LivroService.excluir(idLivro);

      res.status(204).end();
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvarInfo(req, res, next) {
    try {
      if (!Permission.isAdmin()) {
        return res.status(403).end();
      }

      const info = req.body;

      const novaInfo = await LivroService.salvarInfo(info);

      res.status(201).json(novaInfo);
    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async alterarInfo(req, res, next) {
    try {
      if (!Permission.isAdmin()) {
        return res.status(403).end();
      }

      const info = req.body;

      const infoAtualizada = await LivroService.alterarInfo(info);

      res.status(200).json(infoAtualizada)
    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluirInfo(req, res, next) {
    try {
      if (!Permission.isAdmin()) {
        return res.status(403).end();
      }

      const idLivro = req.params.id;

      await LivroService.excluirInfo(idLivro);

      res.status(204).end();
    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async salvarAvaliacao(req, res, next) {
    try {
      const idLivro = req.params.id;
      const avaliacao = req.body;

      const novaAvaliacao = await LivroService.salvarAvaliacao(idLivro, avaliacao);

      res.status(201).json(novaAvaliacao);
    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

  async excluirAvaliacao(req, res, next) {
    try {
      if (!Permission.isAdmin()) {
        return res.status(403).end();
      }
      
      const idLivro = req.params.id;
      const index = req.params.index;

      await LivroService.excluirAvaliacao(idLivro, index);

      res.status(204).end();
    } catch(error) {
      res.status(400).json({ error: error.message })
    }
  }

}

export default new LivroController();