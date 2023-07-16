import { BaseRoute } from "./baseRoute.js";

export class AutorRoute extends BaseRoute {
  constructor() {
    super(AutorController);
    this.init();
  }

  init() {
    super.init();

    return this.router;
  }
}