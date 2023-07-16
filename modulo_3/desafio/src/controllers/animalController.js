import animalService from '../services/animalService.js';

async function index(req, res) {
  try {
    const animals = await animalService.findAll();
    return res.json(animals);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const animal = await animalService.findOne(id);
    return res.json(animal);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function store(req, res) {
  try {
    const animal = await animalService.create(req.body);
    return res.json(animal);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const { id } = req.body;
    const animal = await animalService.update(id, req.body);
    return res.json(animal);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    const { id } = req.params;
    const animal = await animalService.remove(id);
    return res.json(animal);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
  
export default { index, show, store, update, destroy };