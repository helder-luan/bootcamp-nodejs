import proprietarioRepository from '../repositories/proprietarioRepository.js';

async function findAll() {
  try {
    const proprietarios = await proprietarioRepository.findAll();
    return proprietarios;
  } catch (error) {
    return { error: error.message };
  }
}

async function findOne(id) {
  try {
    const proprietario = await proprietarioRepository.findOne(id);
    return proprietario;
  } catch (error) {
    return { error: error.message };
  }
}

async function create(proprietario) {
  try {
    const proprietario = await proprietarioRepository.create(proprietario);
    return proprietario;
  } catch (error) {
    return { error: error.message };
  }
}

async function update(id, proprietario) {
  try {
    const proprietario = await proprietarioRepository.update(id, proprietario);
    return proprietario;
  } catch (error) {
    return { error: error.message };
  }
}

async function remove(id) {
  try {
    const proprietario = await proprietarioRepository.remove(id);
    return proprietario;
  } catch (error) {
    return { error: error.message };
  }
}

export default { findAll, findOne, create, update, remove };