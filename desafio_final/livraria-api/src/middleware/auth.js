import basicAuth from "express-basic-auth";
import ClienteService from "../services/clienteService.js";

class Auth {
  static usuarioAutenticado = null;

  static async authenticate(email, password, callback) {
    const cliente = await ClienteService.obterPorEmail(email);

    console.log();

    if (cliente && basicAuth.safeCompare(cliente.senha, password)) {
      delete cliente.dataValues.senha;

      Auth.usuarioAutenticado = cliente;

      return callback(null, true);
    }

    return callback(null, false);
  }

  static getUnauthorizedResponse(req) {
    return req.auth
      ? ('Credentials ' + req.auth.user + ':' + req.auth.password + ' rejected')
      : 'No credentials provided';
  }
}

export default Auth;