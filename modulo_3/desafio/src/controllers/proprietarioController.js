import proprietarioService from '../services/proprietarioService.js';

async function index(req, res) {
  try {
    const proprietarios = await proprietarioService.findAll();
    return res.json(proprietarios);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function show(req, res) {
  try {
    const { id } = req.params;
    const proprietario = await proprietarioService.findOne(id);
    return res.json(proprietario);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function store(req, res) {
  try {
    const proprietario = await proprietarioService.create(req.body);
    return res.json(proprietario);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function update(req, res) {
  try {
    const { id } = req.body;
    const proprietario = await proprietarioService.update(id, req.body);
    return res.json(proprietario);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}

async function destroy(req, res) {
  try {
    const { id } = req.params;
    const proprietario = await proprietarioService.remove(id);
    return res.json(proprietario);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
}
  
export default { index, show, store, update, destroy };