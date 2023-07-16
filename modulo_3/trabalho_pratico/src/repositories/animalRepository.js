import { AnimalModel } from '../data/models/AnimalModel.js';

async function findAll() {
  try {
    const animals = await AnimalModel.findAll();

    return animals;
  } catch (error) {
    return { error: error.message };
  }
}

async function findOne(id) {
  try {
    const animal = await AnimalModel.findByPk(id);

    return animal;
  } catch (error) {
    return { error: error.message };
  }
}

async function create(animal) {
  try {
    const animal = await AnimalModel.create(animal);

    return animal;
  } catch (error) {
    return { error: error.message };
  }
}

async function update(id, animal) {
  try {
    const animal = await AnimalModel.update(animal, {
      where: {
        animal_id: id
      }
    });

    return animal;
  } catch (error) {
    return { error: error.message };
  }
}

async function remove(id) {
  try {
    const animal = await AnimalModel.destroy({
      where: {
        animal_id: id
      }
    });

    return animal;
  } catch (error) {
    return { error: error.message };
  }
}

export default { findAll, findOne, create, update, remove };