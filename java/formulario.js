function datosPedido(nombre, domicilio, telefono) {
  this.nombre = nombre;
  this.domicilio = domicilio;
  this.telefono = telefono;
}

const cargarRetiro = () => {
  document.getElementById("container").innerHTML = `
  <div id="formCliente">
  <form id="formulario"> 
      <h3>NOMBRE Y APELLIDO</h3>
      <input class="fielder" type="text" name="NOMBRE" id="nombre" placeholder="NOMBRE"></input>
      <h3>DOMICILIO</h3>
      <input class="fielder" type="text" name="DOMICILIO" id="domicilio" placeholder="DOMICILIO"></input>
      <h3>TELEFONO</h3>
      <input class="fielder" type="number" name="TELEFONO" id="telefono"placeholder="TELEFONO"></input> 
      </form> 
      <div id="container" class="row">  
      <button class="btn btn-primary cargar" onClick="confirmarDatos()">Confirmar datos!!</button>
      </div> 
    </div>`;
};
const cargarDeli = () => {
  document.getElementById("container").innerHTML = `
        <div id="formCliente">
        <form id="formulario"> 
          <h3>NOMBRE Y APELLIDO</h3>
          <input class="fielder" type="text" name="NOMBRE" id="nombre" placeholder="NOMBRE"></input>
          <h3>DOMICILIO</h3>
          <input class="fielder" type="text" name="DOMICILIO" id="domicilio" placeholder="DOMICILIO"></input>
          <h3>TELEFONO</h3>
          <input class="fielder" type="number" name="TELEFONO" id="telefono"placeholder="TELEFONO"></input>
        </form> 
        <div id="container" class="row">  
            <button class="btn btn-primary cargar" onClick="confirmarDatos()">Confirmar datos!!</button>
        </div> 
        </div>`;
};
const confirmarDatos = () => {
  const nombre = document.getElementById("nombre").value;
  const domicilio = document.getElementById("domicilio").value;
  const telefono = document.getElementById("telefono").value;
  document.getElementById("formCliente").style.display = "none";

  console.log({ nombre, domicilio, telefono });

  let nuevoCliente = document.createElement("div");
  nuevoCliente.innerHTML = `<p id="confirmacion"> HOLA  ${nombre}, AHORA VAMOS A ARMAR TU PEDIDO!!
    TE LO ENVIAREMOS A ${domicilio} Y CUALQUIER DUDA NOS COMUNICAREMOS CON VOS AL ${telefono}
    SI TODOS LOS DATOS QUE INGRESASTE SON CORRECTOS SIGAMOS, ASI TE LLEVAMOS LO MAS RAPIDO POSIBLE EL PEDIDO</p> 
    <div id="container" class="row">  
        <button class="btn btn-primary cargar" onClick="nuevoPedido()">ARMEMOS TU PEDIDO!!</button>
    </div>  `;
  nuevoCliente.className = "datos-Clientes";
  nuevoCliente.id="confirmacionId"
  document.body.appendChild(nuevoCliente);
  // var highlightBg = highlightColor || "#FFFF9C";

  $("#confirmacion").css("color", "black")
        .slideUp(1000)
        .animate({  left:'250px',
          opacity:'0.5',
          "font-size":'20px'
           },
          1000)
        .slideDown(1000);

};

function datosCliente(pedido1) {
  let formulario1 = document.getElementById("formulario");
  formulario1.parentNode.removeChild(formulario1);
}

