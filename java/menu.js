const productos = [
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
    {
      id: 12, nombre: "LANGOSTINOS CRUHIENTES", precio: 650, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 13, nombre: "CROQUETAS DE SALMON", precio: 450, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 14, nombre: "EMPANADITAS CHINAS DE CARNE X 4 UNI", precio: 430, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 15, nombre: "EMPANADITAS CHINAS VEGGIE X 4 UNI", precio: 400, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 16, nombre: "MIX CHINAS X 6 UNIDADES", precio: 640, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 17, nombre: "CHOP SUEY CON POLLO", precio: 740, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 18, nombre: "CHOP SUEY CON LOMO", precio: 760, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 19, nombre: "CHOP SUEY VEGGIE", precio: 700, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 20, nombre: "CHOW FAN CON POLLO", precio: 740, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 21, nombre: "CHOW FAN CON LOMO", precio: 760, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 22, nombre: "CHOW FAN VEGGIE", precio: 700, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 23, nombre: "CHOW MEIN CON POLLO", precio: 740, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 24, nombre: "CHOW MEIN CON LOMO", precio: 760, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 25, nombre: "CHOW MEIN VEGGIE", precio: 700, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 26, nombre: "SALMON TERIYAKI", precio: 1020, imagen: "../imagenes/bx2.jpg",
    },
    {
      id: 27, nombre: "LOMO SALTADO", precio: 910, imagen: "../imagenes/bx2.jpg",
    },
    {  
      id: 28,  nombre: "COMBO SAHARA 30 PIEZAS", precio: 3100,imagen: "../imagenes/bx2.jpg", 
    },
    {
      id: 29,  nombre: "COMBO CALIENTES 12 PIEZAS" , precio: 1500,imagen: "../imagenes/bx2.jpg",
    },
    {  
      id: 30,  nombre: "PORCION CLASICOS 5 UNIDADES" , precio: 580,imagen: "../imagenes/bx2.jpg",
    },
    {  
      id: 31,  nombre: "ARMALO COMO QUIERAS 15 PIEZAS" , precio: 1850,imagen: "../imagenes/bx2.jpg",
    },
    { 
      id: 32,  nombre: "ARMALO COMO QUIERAS 30 PIEZAS" , precio: 3610,imagen: "../imagenes/bx2.jpg",
    },
    { 
      id: 33,  nombre: "ARMALO COMO QUIERAS 45 PIEZAS" , precio: 5370,imagen: "../imagenes/bx2.jpg",
    },
    { 
      id: 34,  nombre: "ARMALO COMO QUIERAS 60 PIEZAS" , precio: 7140,imagen: "../imagenes/bx2.jpg",
    }
  ];
  
  console.log(productos);

  const nuevoPedido = () => {
    let contenedor = document.getElementById("container");
    document.getElementById("confirmacionId").style.display = "none";
  console.log("nuevoPedido");}

  productos.forEach ((producto, index) => {
          let card = document.createElement("div");
          card.classList.add("card", "col-sm-12", "col-lg-3");
          let html = `
      <img src="${producto.imagen}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${producto.nombre}</h5>
        <p class="card-text">${producto.precio}</p>
        <a href="#" class="btnn btn-primary" onClick="(${index})">LO QUIERO!!</a>
      </div>
    </div>`;
          card.innerHTML = html;
          contenedor.appendChild(card);

          /* (`#btn${producto.id}`).on("click", function () {
             console.log(`YA CARGAMOS ${producto.nombre}`);
           });*/
      });

    //card.innerHTML = html;
    //contenedor.appendChild(card);
  
  const cart = [];
  
  const inicioCompra = (indexProducto) => {
    //findIndex devuelve el indice del elemento encontrado
    // si no encuentra nada devuelve menos 1 (-1)
    const indiceEncontradoCarrito = cart.findIndex((elemento) => {
      return elemento.id === productos[indexProducto].id;
    });
    if (indiceEncontradoCarrito === -1) {
      //agrego el producto
      const productoAgregar = productos[indexProducto];
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
      cart.forEach((producto, indice) => {
        total = total + producto.precio * producto.cantidad;
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
    <button class= "btn btn-danger formulario" id="formulario" onClick="mostarMensaje()"> FORMULARIO </button>
    </div>`;
    modalCarrito.innerHTML = compraFinalizada;
  };
  
  const mostrarMensaje = () => {
    const nombreCliente = document.getElementById("nombre").value;
    const domicilioCliente = document.getElementById("domicilio").value;
    debugger;
    modalCarrito.innerHTML = "";
    let mensaje = `<div class="mensaje-final">Gracias ${nombreCliente} por su compra! en 72 horas recibira su paquete en ${domicilioCliente} </div>`;
    modalCarrito.innerHTML = mensaje;
  };
  