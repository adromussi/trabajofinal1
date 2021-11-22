const productos = [
  {
    id: 1,
    nombre: "COMBO DELUXE 15 PIEZAS",
    precio: 1300,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 2,
    nombre: "COMBO DELUXE 30 PIEZAS",
    precio: 2500,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 3,
    nombre: "COMBO SMILE 15 PIEZAS",
    precio: 1200,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 4,
    nombre: "COMBO SMILE 30 PIEZAS",
    precio: 2300,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 5,
    nombre: "COMBO FUSION 15 PIEZAS",
    precio: 1400,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 6,
    nombre: "COMBO FUSION 30 PIEZAS",
    precio: 4500,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 7,
    nombre: "COMBO GOLD 15 PIEZAS",
    precio: 1800,
    imagen: "../imagenes/bx2.jpg",
  },

  {
    id: 8,
    nombre: "COMBO GOLD 30 PIEZAS",
    precio: 3700,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 9,
    nombre: "COMBO TODO SALMON 15 PIEZAS",
    precio: 1900,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 10,
    nombre: "COMBO TODO SALMON 30 PIEZAS",
    precio: 3900,
    imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 11,
    nombre: "COMBO VEGGIE 12 PIEZAS",
    precio: 1300,
    imagen: "../imagenes/bx2.jpg",
  },
];
const nuevosProductos = [
  {  id: 12,  nombre: "COMBO SAHARA 30 PIEZAS", precio: 2700,imagen: "../imagenes/bx2.jpg", },
  {  id: 13,  nombre: "COMBO CALIENTES 12 PIEZAS" , precio: 1700,imagen: "../imagenes/bx2.jpg",},
  {  id: 14,  nombre: "PORCION CLASICOS 5 UNIDADES" , precio: 580,imagen: "../imagenes/bx2.jpg",}
];

console.log(productos);

const nuevoPedido = () => {
  let contenedor = document.getElementById("container");
  document.getElementById("confirmacionId").style.display = "none";

  productos.forEach((producto) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    let html = `
    <div class="card", "col-sm-12", "col-lg-3">
      <img src="${producto.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" id='btn${producto.id}' class="btnn btn-primary">LO QUIERO!!</a>
      </div>
    </div>`;
    card.innerHTML = html;
    contenedor.appendChild(card);

    $(`#btn${producto.id}`).on("click", function () {
      console.log(`YA CARGAMOS ${producto.nombre}`);
    });
  });
  
  // Se agregan mas productos utilzando jquery
  for (const producto of nuevosProductos) {
    $("#container").append(
      `<div class="card col-sm-12 col-lg-3">
        <img src="${producto.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">${producto.precio}</p>
          <a href="#" id='btn${producto.id}' class="btnn btn-primary">LO QUIERO!!</a>
        </div>
      </div>`
    );
  }
};
