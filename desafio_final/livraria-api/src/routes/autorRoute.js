import { BaseRoute } from "./baseRoute.js";
import AutorController from "../controllers/autorController.js";

class AutorRoute extends BaseRoute {
  constructor() {
    super(AutorController);
    return this.init();
  }

  init() {
    return super.init();
  }
}

export default new AutorRoute();