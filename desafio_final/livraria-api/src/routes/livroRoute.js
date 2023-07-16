import { BaseRoute } from "./baseRoute.js";

export class LivroRoute extends BaseRoute {
  constructor() {
    super(LivroController);
    this.init();
  }

  init() {
    super.init();

    this.adicionarRotas();

    return this.router;
  }

  // rotas adicionais
  adicionarRotas() {
    // detalhe por autor
    this.router.get('?autorId=:id', this.classController.obterPorAutorId);

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