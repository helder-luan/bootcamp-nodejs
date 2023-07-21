import { BaseRoute } from "./baseRoute.js";
import VendaController from "../controllers/vendaController.js";

class VendaRoute extends BaseRoute {
  constructor() {
    super(VendaController);
    return this.init();
  }

  init() {
    return super.init();
  }

  // rotas adicionais
  adicionarRotas() {}
}

export default new VendaRoute();