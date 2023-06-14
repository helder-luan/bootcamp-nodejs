import { Router } from "express";
import { listaCarrosOrdenada } from '../helpers/funcoes.js';

const router = Router();

router.get('/maisModelos', (_, res) => {
  const marcas = listaCarrosOrdenada("DESC");
  res.send(marcas);
})

router.get('/menosModelos', (_, res) => {
  const marcas = listaCarrosOrdenada();
  res.send(marcas);
})

router.get('/listaMaisModelos/:topNumber', (req, res) => {
  const topNumber = req.params.topNumber;

  if (topNumber <= 0) {
    res.send("O toplist precisa de uma quantidade maior que 0");
  }
  
  const marcas = listaCarrosOrdenada("DESC");
  const topMarcas = [];

  for(let i = 0; i < topNumber; i++) {
    topMarcas.push(`Marca ${marcas[i].brand} - ${marcas[i].models.length}`);
  }

  res.send(topMarcas);
})

router.get('/listaMenosModelos/:topNumber', (req, res) => {
  const topNumber = req.params.topNumber;

  if (topNumber <= 0) {
    res.send("O toplist precisa de uma quantidade maior que 0");
  }
  
  const marcas = listaCarrosOrdenada();
  const topMarcas = [];

  for(let i = 0; i < topNumber; i++) {
    topMarcas.push(`Marca ${marcas[i].brand} - ${marcas[i].models.length}`);
  }

  res.send(topMarcas);
})

router.post('/listaModelos', (req, res) => {
  const nomeMarca = req.body.nomeMarca;

  if (nomeMarca === "" || nomeMarca === undefined) {
    res.send("Digite o nome de uma marca para buscar");
  }

  const marcas = listaCarrosOrdenada();

  const marcaEncontrada = marcas.find(marca => marca.brand.toLowerCase() == nomeMarca.toLowerCase())?.models ?? [];
  
  res.send(marcaEncontrada);
})

export default router;