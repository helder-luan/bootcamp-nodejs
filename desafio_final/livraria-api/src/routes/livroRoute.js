import { BaseRoute } from "./baseRoute.js";
import LivroController from "../controllers/livroController.js";

class LivroRoute extends BaseRoute {
  constructor() {
    super(LivroController);
    return this.init();
  }

  init() {
    this.adicionarRotas();
    return super.init();
  }

  // rotas adicionais
  adicionarRotas() {
    // detalhe por autor
    this.router.get('/?autorId=:id', this.classController.obterPorAutorId);

    // inclusão informações livro
    this.router.post('/info', this.classController.salvarInfo);

    // alteração informações livro
    this.router.put('/info', this.classController.alterarInfo);

    // exclusão informações livro
    this.router.delete('/info/:id', this.classController.excluirInfo);

    // inclusão avaliação livro
    this.router.post('/:id/avaliacao', this.classController.salvarAvaliacao);

    // exclusão avaliação livro
    this.router.delete('/:id/avaliacao/:id', this.classController.excluirAvaliacao);
  }
}

export default new LivroRoute();