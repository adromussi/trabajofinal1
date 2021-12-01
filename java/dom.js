/*const calientes = [
  {
    id: 1, nombre: "LANGOSTINOS CRUHIENTES", precio: 650, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 2, nombre: "CROQUETAS DE SALMON", precio: 450, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 3, nombre: "EMPANADITAS CHINAS DE CARNE X 4 UNI", precio: 430, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 4, nombre: "EMPANADITAS CHINAS VEGGIE X 4 UNI", precio: 400, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 5, nombre: "MIX CHINAS X 6 UNIDADES", precio: 640, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 6, nombre: "CHOP SUEY CON POLLO", precio: 740, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 7, nombre: "CHOP SUEY CON LOMO", precio: 760, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 8, nombre: "CHOP SUEY VEGGIE", precio: 700, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 9, nombre: "CHOW FAN CON POLLO", precio: 740, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 10, nombre: "CHOW FAN CON LOMO", precio: 760, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 11, nombre: "CHOW FAN VEGGIE", precio: 700, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 12, nombre: "CHOW MEIN CON POLLO", precio: 740, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 13, nombre: "CHOW MEIN CON LOMO", precio: 760, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 14, nombre: "CHOW MEIN VEGGIE", precio: 700, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 15, nombre: "SALMON TERIYAKI", precio: 1020, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 16, nombre: "LOMO SALTADO", precio: 910, imagen: "../imagenes/bx2.jpg",
  },
 
]
console.log(calientes);

const nuevoPedidoCaliente = () => {
  let contenedor = document.getElementById("container");
  document.getElementById("confirmacionId").style.display = "none";
console.log("nuevoPedidoCaliente");
  calientes.forEach((caliente) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    let html = `
    <div class="card", "col-sm-12", "col-lg-3">
      <img src="${caliente.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${caliente.nombre}</h5>
        <p class="card-text">${caliente.precio}</p>
        <a href="#" id='btn${caliente.id}' class="btnn btn-primary">LO QUIERO!!</a>
      </div>
    </div>`;
    card.innerHTML = html;
    contenedor.appendChild(card);

    $(`#btn${caliente.id}`).on("click", function () {
      console.log(`YA CARGAMOS ${caliente.nombre}`);
    });
  });*/

const sushis = [
  {
    id: 1, nombre: "COMBO DELUXE 15 PIEZAS", precio: 1780, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 2, nombre: "COMBO DELUXE 30 PIEZAS", precio: 3400, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 3, nombre: "COMBO SMILE 15 PIEZAS", precio: 1480, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 4, nombre: "COMBO SMILE 30 PIEZAS", precio: 2860, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 5, nombre: "COMBO FUSION 15 PIEZAS", precio: 1570, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 6, nombre: "COMBO FUSION 30 PIEZAS", precio: 3050, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 7, nombre: "COMBO GOLD 15 PIEZAS", precio: 1810, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 8, nombre: "COMBO GOLD 30 PIEZAS", precio: 3490, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 9, nombre: "COMBO TODO SALMON 15 PIEZAS", precio: 1700, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 10, nombre: "COMBO TODO SALMON 30 PIEZAS", precio: 3300, imagen: "../imagenes/bx2.jpg",
  },
  {
    id: 11, nombre: "COMBO VEGGIE 12 PIEZAS", precio: 1200, imagen: "../imagenes/bx2.jpg",
  },
];
const nuevosSushis = [
  {  id: 12,  nombre: "COMBO SAHARA 30 PIEZAS", precio: 3100,imagen: "../imagenes/bx2.jpg", },
  {  id: 13,  nombre: "COMBO CALIENTES 12 PIEZAS" , precio: 1500,imagen: "../imagenes/bx2.jpg",},
  {  id: 14,  nombre: "PORCION CLASICOS 5 UNIDADES" , precio: 580,imagen: "../imagenes/bx2.jpg",},
  {  id: 15,  nombre: "ARMALO COMO QUIERAS 15 PIEZAS" , precio: 1850,imagen: "../imagenes/bx2.jpg",},
  {  id: 16,  nombre: "ARMALO COMO QUIERAS 30 PIEZAS" , precio: 3610,imagen: "../imagenes/bx2.jpg",},
  {  id: 17,  nombre: "ARMALO COMO QUIERAS 45 PIEZAS" , precio: 5370,imagen: "../imagenes/bx2.jpg",},
  {  id: 18,  nombre: "ARMALO COMO QUIERAS 60 PIEZAS" , precio: 7140,imagen: "../imagenes/bx2.jpg",}
];

console.log(sushis);



const nuevoPedido = () => {
  let contenedor = document.getElementById("container");
  document.getElementById("confirmacionId").style.display = "none";
console.log("nuevoPedido");
  sushis.forEach((sushi, indice) => {
    let card = document.createElement("div");
    card.classList.add("card", "col-sm-12", "col-lg-3");
    let html = `
    <div class="card", "col-sm-12", "col-lg-3">
      <img src="${sushi.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${sushi.nombre}</h5>
        <p class="card-text">${sushi.precio}</p>
        <a href="#" id='btn${sushi.id}' class="btnn btn-primary">LO QUIERO!!</a>
      </div>
    </div>`;
    card.innerHTML = html;
    contenedor.appendChild(card);

    $(`#btn${sushi.id}`).on("click", function () {
      console.log(`YA CARGAMOS ${sushi.nombre}`);
    });
  });
  
  // Se agregan mas productos utilzando jquery
  for (const sushi of nuevosSushis) {
    $("#container").append(
      `<div class="card col-sm-12 col-lg-3">
        <img src="${sushi.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${sushi.nombre}</h5>
          <p class="card-text">${sushi.precio}</p>
          <a href="#" id='btn${sushi.id}' class="btnn btn-primary">LO QUIERO!!</a>
        </div>
      </div>`
    );
  }
};
const carta = () =>{
  console.log("carta");
  document.getElementById("confirmacionId").style.display = "none";
  $("#container").append(
      `<div class="row">
      <div class="col-lg-6">
        <div>
          <img src="../imagenes/bx6.jpg" class="fotos4" alt="imagen bx">
          
          <button id="cocina" type="submit" class="btn btn-outline-danger" >
          COCINA
          </button>
        </div>
      </div>
      <div class="col-lg-6">
        <div>
          <img src="../imagenes/diag.jpg" class="fotos4" alt="imagen diag">
          
          <button id="combos" type="submit" class="btn btn-outline-danger" >
         COMBOS
          </button>
        </div>
        </div>
        </div> `
  )
  $(`#combos`).on("click", nuevoPedido)}
 // $(`#cocina`).on("click", nuevoPedidoCaliente)
