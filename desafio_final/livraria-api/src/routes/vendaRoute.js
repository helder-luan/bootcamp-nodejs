import { BaseRoute } from "./baseRoute.js";

export class VendaRoute extends BaseRoute {
  constructor() {
    super(VendaController);
    this.init();
  }

  init() {
    super.init();

    this.adicionarRotas();

    return this.router;
  }

  // rotas adicionais
  adicionarRotas() {
    // detalhe por cliente
    this.router.get('?clienteId=:id', this.classController.obterPorClienteId);

    // detalhe por livro
    this.router.get('?livroId=:id', this.classController.obterPorLivroId);

    // detalhe por autor
    this.router.get('?autorId=:id', this.classController.obterPorAutorId);
  }
}