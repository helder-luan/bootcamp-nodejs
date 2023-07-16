import { BaseRoute } from "./baseRoute.js";

export class ClienteRoute extends BaseRoute {
  constructor() {
    super(ClienteController);
    this.init();
  }

  init() {
    super.init();

    // rotas adicionais
    // this.router.get('/nome/:nome', this.classController.obterPorNome);

    return this.router;
  }
}