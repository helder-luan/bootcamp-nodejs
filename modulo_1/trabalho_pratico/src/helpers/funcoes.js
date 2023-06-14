import lista from '../data/car-list.json' assert { type: "json" };
function listaCarrosOrdenada(type = "ASC") {
  return lista.sort((a, b) =>
    type == "DESC"
      ? b.models.length - a.models.length || b.brand.localeCompare(a.brand)
      : a.models.length - b.models.length || a.brand.localeCompare(b.brand)
  );
}

export { lista, listaCarrosOrdenada };
