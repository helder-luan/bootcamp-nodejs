import { Router } from 'express';

export class BaseRoute {
  constructor(classController) {
    this.router = Router();
    this.classController = classController;
  }

  init() {
    // listagem
    this.router.get('/', this.classController.listar);

    // detalhes
    this.router.get('/:id', this.classController.obterPorId);

    // inclusão
    this.router.post('/', this.classController.salvar);

    // alteração
    this.router.put('/', this.classController.alterar);

    // exclusão
    this.router.delete('/:id', this.classController.excluir);

    return this.router;
  }
}