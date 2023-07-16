import animalRepository from '../repositories/animalRepository.js';

async function findAll() {
  try {
    const animals = await animalRepository.findAll();
    return animals;
  } catch (error) {
    return { error: error.message };
  }
}

async function findOne(id) {
  try {
    const animal = await animalRepository.findOne(id);
    return animal;
  } catch (error) {
    return { error: error.message };
  }
}

async function create(animal) {
  try {
    const animal = await animalRepository.create(animal);
    return animal;
  } catch (error) {
    return { error: error.message };
  }
}

async function update(id, animal) {
  try {
    const animal = await animalRepository.update(id, animal);
    return animal;
  } catch (error) {
    return { error: error.message };
  }
}

async function remove(id) {
  try {
    const animal = await animalRepository.remove(id);
    return animal;
  } catch (error) {
    return { error: error.message };
  }
}

export default { findAll, findOne, create, update, remove };