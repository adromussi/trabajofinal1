/*const carta = () =>{
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

}<div class="col-lg-6">
<div>
  <img src="../imagenes/diag.jpg" class="fotos4" alt="imagen diag">
  
  <button id="combos" type="submit" class="btn btn-outline-danger" >
 COMBOS
  </button>
</div>
</div>
/*const carta = () =>{
  console.log("carta");
  document.getElementById("confirmacionId").style.display = "none";
  $("#container").append(
      `<div id="botonesCarta" class="row">
      <div class="col-lg-6">
        <div>
          <img src="../imagenes/bx6.jpg" class="fotos4" alt="imagen bx">
          
          <button id="cocina" type="submit" class="btn btn-outline-danger" >
          COCINA
          </button>
        </div>
      </div>
        </div> `
  )
  $(`#cocina`).on("click", nuevoPedidoCaliente)
  
}
const carta1 = () =>{
  console.log("carta1");
  document.getElementById("confirmacionId1").style.display = "none";
  $("#container").append(
      `<div id="botonesCarta" class="row">
      <div class="col-lg-6">
        <div>
          <img src="../imagenes/diag.jpg" class="fotos4" alt="imagen diag">
          
          <button id="combos" type="submit" class="btn btn-outline-danger" >
         COMBOS
          </button>
        </div>
        </div>
        </div> `
  )*/
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
            
            
            <button id="cocina" type="submit" class="btn btn-outline-danger" >
            COCINA
            </button>
          </div>
        </div>
        <div class="col-lg-6">
          <div>
            
            
            <button id="combos" type="submit" class="btn btn-outline-danger" >
           COMBOS
            </button>
          </div>
          </div>
          </div> `
    )
    $(`#combos`).on("click", nuevoPedido)}
   // $(`#cocina`).on("click", nuevoPedidoCaliente)
  
  $(`#combos`).on("click", nuevoPedido)
  const contenedor = document.getElementById("container");
contenedor.innerHTML = "";

sushis.forEach((sushi, indice) => {
  let card = document.createElement("div");
  card.classList.add("card", "col-sm-12", "col-lg-3");
  let html = `
    <img src="${sushi.imagen}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${sushi.nombre}</h5>
      <p class="card-text">${sushi.precio}</p>
      <a href="#cart" class="btn btn-primary" onClick="abrirCarrito(${indice})">Comprar</a>
    </div>
      `;
  card.innerHTML = html;
  contenedor.appendChild(card);
});

const cart = [];

const abrirCarrito = (indiceDelArrayProducto) => {
  //findIndex devuelve el indice del elemento encontrado
  // si no encuentra nada devuelve menos 1 (-1)
  const indiceEncontradoCarrito = cart.findIndex((elemento) => {
    return elemento.id === sushis[indiceDelArrayProducto].id;
  });
  if (indiceEncontradoCarrito === -1) {
    //agrego el producto
    const productoAgregar = sushis[indiceDelArrayProducto];
    productoAgregar.cantidad = 1;
    cart.push(productoAgregar);
    actualizarCarrito();
  } else {
    //incremento cantidad
    cart[indiceEncontradoCarrito].cantidad += 1;
    actualizarCarrito();
  }
};

let modalCarrito = document.getElementById("cart");

const actualizarCarrito = () => {
  let total = 0;
  modalCarrito.className = "cart";
  modalCarrito.innerHTML = "";
  if (cart.length > 0) {
    cart.forEach((sushi, indice) => {
      total = total + sushi.precio * sushi.cantidad;
      const carritoContainer = document.createElement("div");
      carritoContainer.className = "producto-carrito";
      carritoContainer.innerHTML = `
        <img class="car-img" src="${producto.imagen}"/>
        <div class="product-details">
          ${producto.nombre}
        </div>
        <div class="product-details" > Cantidad: ${producto.cantidad}</div>
        <div class="product-details"> Precio: $ ${producto.precio}</div>
        <div class="product-details"> Subtotal: $ ${
          producto.precio * producto.cantidad
        }</div>
        <button class="btn btn-danger"  id="remove-product" onClick="removeProduct(${indice})">Eliminar producto</button>
         `;
      modalCarrito.appendChild(carritoContainer);
    });
    // Dibujo el total y lo appendeo en el div capturado y guardado en la variable modalCarrito
    const totalContainer = document.createElement("div");
    totalContainer.className = "total-carrito";
    totalContainer.innerHTML = `<div class= "total"> TOTAL $ ${total}</div>
    <button class= "btn btn-danger finalizar" id="finalizar" onClick="finalizarCompra()"> FINALIZAR COMPRA </button>`;
    modalCarrito.appendChild(totalContainer);
  } else {
    modalCarrito.classList.remove("cart");
  }
};

const removeProduct = (indice) => {
  cart.splice(indice, 1);
  actualizarCarrito();
};
const finalizarCompra = () => {
  const total = document.getElementsByClassName("total")[0].innerHTML;
  modalCarrito.innerHTML = "";
  const compraFinalizada = `<div class="compra-finalizada"><p class="compra-parrafo"> YA CASI ES TUYA LA COMPRA, EL   ${total} </p></div>
  <div class="datos-cliente">
  <p class="datos-parrafo"> Complete el formulario con sus datos para coordinar la entrega</p>
  <button class= "btn btn-danger formulario" id="formulario" onClick="dibujarFormu()"> FORMULARIO </button>
  </div>`;
  modalCarrito.innerHTML = compraFinalizada;
};
const dibujarFormu = () => {
  modalCarrito.innerHTML = "";
  const formulario = `  
  <h2> DATOS PARA EL ENVÍO </h2> 
  <div class="contact__secction-container">
   <div class="row">
     <div class="contact__secction__item">
       <label>Nombre</label>
       <input type="text" id="nombre" placeholder="Nombre"  />
     </div>
     <div class="contact__secction__item">
       <label>E-mail</label>
       <input type="text" id="mail" placeholder="E-mail" />
     </div>
     <div class="contact__secction__item">
       <label>Telefono</label>
       <input type="text" id="telefono" placeholder="Telefono"  />
     </div>
     <div class="contact__secction__item">
       <label>Domicilio</label>
       <input type="text" id="domicilio" placeholder="Domicilio" />
     </div>
     <div class="contact-button">
       <button type="button" class="btn btn-danger envio" onClick="mostrarMensaje()" >Confirmar</button>
     </div>
   </div>
 </div>`;
  modalCarrito.innerHTML = formulario;
};

const mostrarMensaje = () => {
  const nombreCliente = document.getElementById("nombre").value;
  const domicilioCliente = document.getElementById("domicilio").value;
  debugger;
  modalCarrito.innerHTML = "";
  let mensaje = `<div class="mensaje-final">Gracias ${nombreCliente} por su compra! en 72 horas recibira su paquete en ${domicilioCliente} </div>`;
  modalCarrito.innerHTML = mensaje;
};
