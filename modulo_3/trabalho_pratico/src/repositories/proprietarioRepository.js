import { ProprietarioModel } from '../data/models/proprietarioModel.js';

const table = 'proprietarios';

async function findAll() {
  try {
    const proprietarios = await ProprietarioModel.findAll();

    return proprietarios;
  } catch (error) {
    return { error: error.message };
  }
}

async function findOne(id) {
  try {
    const proprietario = await ProprietarioModel.findByPk(id);

    return proprietario;
  } catch (error) {
    return { error: error.message };
  }
}

async function create(proprietario) {
  try {
    const proprietario = await ProprietarioModel.create(proprietario);

    return proprietario;
  } catch (error) {
    return { error: error.message };
  }
}

async function update(id, proprietario) {
  try {
    const proprietario = await ProprietarioModel.update(proprietario, {
      where: {
        proprietario_id: id
      }
    });

    return proprietario;
  } catch (error) {
    return { error: error.message };
  }
}

async function remove(id) {
  try {
    const proprietario = await ProprietarioModel.destroy({
      where: {
        proprietario_id: id
      }
    });

    return proprietario;
  } catch (error) {
    return { error: error.message };
  }
}

export default { findAll, findOne, create, update, remove };