import { BaseRoute } from "./baseRoute.js";
import ClienteController from "../controllers/clienteController.js";

class ClienteRoute extends BaseRoute {
  constructor() {
    super(ClienteController);
    return this.init();
  }

  init() {
    // rotas adicionais
    // this.router.get('/nome/:nome', this.classController.obterPorNome);
    
    return super.init();
  }
}

export default new ClienteRoute();