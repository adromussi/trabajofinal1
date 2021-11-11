
const cargarRetiro = () => {
    document.getElementById("container").innerHTML=
    `<form id="formulario"> 
      <h3>NOMBRE Y APELLIDO</h3>
      <input class="fielder" type="text" name="NOMBRE" id="nombre" placeholder="NOMBRE"></input>
      <h3>DOMICILIO</h3>
      <input class="fielder" type="text" name="DOMICILIO" id="domicilio" placeholder="DOMICILIO"></input>
      <h3>TELEFONO</h3>
      <input class="fielder" type="number" name="TELEFONO" id="telefono"placeholder="TELEFONO"></input>
      <div id="container" class="row">  
        <button class="btn btn-primary cargar" onClick="cargarProductos()">ARMEMOS TU PEDIDO!!</button>
      </div>  
    </form> `
     };
const cargarDeli = () => {
    document.getElementById("container").innerHTML=
        `<form id="formulario"> 
          <h3>NOMBRE Y APELLIDO</h3>
          <input class="fielder" type="text" name="NOMBRE" id="nombre" placeholder="NOMBRE"></input>
          <h3>DOMICILIO</h3>
          <input class="fielder" type="text" name="DOMICILIO" id="domicilio" placeholder="DOMICILIO"></input>
          <h3>TELEFONO</h3>
          <input class="fielder" type="number" name="TELEFONO" id="telefono"placeholder="TELEFONO"></input>
          <div id="container" class="row">  
            <button class="btn btn-primary cargar" onClick="cargarProductos()">ARMEMOS TU PEDIDO!!</button>
          </div>  
        </form> `
         };    
        
    
let productos = [
    {
      id: 1,
      nombre: "COMBO DELUXE 15 PIEZAS",
      precio: 950,
      imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 2,
      nombre: "COMBO DELUXE 15 PIEZAS",
      precio: 750,
      imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 3,
      nombre: "COMBO DELUXE 15 PIEZAS",
      precio: 900,
      imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 4,
      nombre: "COMBO DELUXE 15 PIEZAS",
      precio: 450,
      imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 5,
      nombre: "COMBO DELUXE 15 PIEZAS",
      precio: 500,
      imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 6,
      nombre: "COMBO DELUXE 15 PIEZAS",
      precio: 4500,
      imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 7,
      nombre: "COMBO DELUXE 15 PIEZAS",
      precio: 500,
      imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 8,
      nombre: "COMBO DELUXE 15 PIEZAS",
      precio: 550,
      imagen: "../imagenes/bx2.jpg",
    },
  ];
  
 
  
  
  
  const cargarProductos = () => {
    let contenedor = document.getElementById("container");
    contenedor.innerHTML = "";
  
    productos.forEach((producto) => {
      let card = document.createElement("div");
      card.classList.add("card", "col-sm-12", "col-lg-3");
      let html = `
      <img src="${producto.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" class="btn btn-primary" onClick="abrirCarrito()">LO QUIERO!!</a>
      </div>
        `;
      card.innerHTML = html;
      contenedor.appendChild(card);
    });
  };
  const abrirCarrito = () => {
    alert("carrito abierto");
  };


  //FORMULARIOS