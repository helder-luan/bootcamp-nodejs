import Auth from "./auth.js";

class Permission {
  static async isAdmin() {
    if (Auth.usuarioAutenticado.role !== 'A') {
      return false;
    }

    return true;
  }
}

export default Permission;