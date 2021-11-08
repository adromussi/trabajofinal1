
function clientes(nombre, apellido, domicilio, telefono){
    this.nombre =nombre;
    this.apellido = apellido;
    this.domicilio = domicilio;
    this.telefono = telefono;
}

/*function clientes(){
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let domicilio = document.getElementById("domicilio").value;
    let telefono = document.getElementById("telefono").value;
    let envio = document.getElementById("envio").value;
    let pedido1 = new newPedido(nombre, apellido, domicilio, telefono, envio)
    console.log(pedido1);
    datosCliente(pedido1); 
     
}
//eliminar contenido
function datosCliente(pedido1){
    let formulario1= document.getElementById("formulario");
    formulario1.parentNode.removeChild(formulario1);
}
//agregar contenido
let nuevoCliente = document.createElement("div");
nuevoCliente.innerHTML =
"HOLA" + pedido0.nombre + pedido0.apellido + "!!!" +
 "YA TENEMOS TUS DATOS , EMPECEMOS A ARMAR TU PEDIDO" +
 "CUANDO ESTE LISTO LO ENVIAREMOS A" + pedido0.domicilio + 
 "CUALQUIER DUDA NOS COMUNICAREMOS A ESTE NUMERO " + pedido0.telefono
nuevoCliente.className = "datos-clientes"
document.body.appendChild(nuevoCliente);*/
/*let productos = [
    {id: `ts`, nombre:`combo todo salmon`,piezas:`15 piezas`,precio:`$1500`},
    {id: `gl`, nombre:`combo gold`,piezas:`15 piezas`,precio:`$1500`},
    {id: `dl`, nombre:`combo deluxe`,piezas:`45 piezas`,precio:`$1500`},
    {id: `sm`, nombre:`combo smile`,piezas:`30 piezas`,precio:`$1500`},
    {id: `fs`, nombre:`combo fusion`,piezas:`15 piezas`,precio:`$1500`},
    {id: `vg`, nombre:`combo veggie`,piezas:`12 piezas`,precio:`$1500`},
]
console.log (productos);
productos.forEach((producto) =>{
let newProducto = document.createElement(`div`)
newProducto.innerHTML = `
<button>
<h2>${producto.nombre}</h2>
<p>${producto.piezas}</p>
<p>${producto.precio}</p>

</button>
`

document.body.appendChild(newProducto)
})
let clientes =[
    {
        nombre: "text",
        apellido:"text",
        domicilio: "text",
        telefono:"number",

        }
] ;*/

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
  
 
  
  
  
  /*const cargarProductos = () => {
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
        <a href="#" class="btn btn-primary" onClick="abrirCarrito()">Comprar</a>
      </div>
        `;
      card.innerHTML = html;
      contenedor.appendChild(card);
    });
  };
  const abrirCarrito = () => {
    alert("carrito abierto");
  };*/
  
const cargarRetiro = () => {
let contenedor = document.getElementById("container");
contenedor.innerHTML = ``
let datosClientes = "";
clientes.forEach((cliente) => {
datosClientes =
datosClientes +
`<form id="formulario"> 
  <input class="fielder" type="text" name="NOMBRE" id="nombre" placeholder="NOMBRE">${cliente.nombre}</input>
  <input class="fielder" type="text" name="APELLIDO" id="apellido" placeholder="APELLIDO">${cliente.apellido}</input>
  <input class="fielder" type="text" name="DOMICILIO" id="domicilio" placeholder="DOMICILIO">${cliente.domicilio}</input>
  <input class="fielder" type="number" name="TELEFONO" id="telefono"placeholder="TELEFONO">${cliente.telefono}</input>
  <div id="container" class="row">  
    <button class="btn btn-primary cargar" onClick="cargarProductos()">ARMEMOS TU PEDIDO!!</button>
  </div>  
</form> `
 });
    
contenedor.innerHTML (datosClientes);
}; 
