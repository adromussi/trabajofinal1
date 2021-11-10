function datosPedido(nombre, domicilio, telefono) {
    this.nombre = nombre;
    this.domicilio = domicilio;
    this.telefono = telefono;
    
}


const cargarRetiro = () => {
    document.getElementById("container").innerHTML=
    `<form id="formulario"> 
      <h3>NOMBRE Y APELLIDO</h3>
      <input class="fielder" type="text" name="NOMBRE" id="nombre" placeholder="NOMBRE">${datosPedido.nombre}</input>
      <h3>DOMICILIO</h3>
      <input class="fielder" type="text" name="DOMICILIO" id="domicilio" placeholder="DOMICILIO">${datosPedido.domicilio}</input>
      <h3>TELEFONO</h3>
      <input class="fielder" type="number" name="TELEFONO" id="telefono"placeholder="TELEFONO">${datosPedido.telefono}</input> 
    </form> `
     };
const cargarDeli = () => {
    document.getElementById("container").innerHTML=
        `<form id="formulario"> 
          <h3>NOMBRE Y APELLIDO</h3>
          <input class="fielder" type="text" name="NOMBRE" id="nombre" placeholder="NOMBRE">${datosPedido.nombre}</input>
          <h3>DOMICILIO</h3>
          <input class="fielder" type="text" name="DOMICILIO" id="domicilio" placeholder="DOMICILIO">${datosPedido.domicilio}</input>
          <h3>TELEFONO</h3>
          <input class="fielder" type="number" name="TELEFONO" id="telefono"placeholder="TELEFONO">${datosPedido.telefono}</input>
        </form> `
         };    


         
        
        function nuevoPedido(){
            let nombre = document.getElementById("nombre").value;
            let domicilio = document.getElementById("domicilio").value;
            let telefono = document.getElementById("telefono").value;
            let pedido1 = new datosPedido(nombre, domicilio, telefono)
            console.log(pedido1);
            datosCliente(pedido1); 
             
        }
        
        function datosCliente(pedido1){
            let formulario1= document.getElementById("formulario");
            formulario1.parentNode.removeChild(formulario1);
        }
        
        /*let nuevoCliente = document.createElement("div");
        nuevoCliente.innerHTML =
        `<p> HOLA  ${datosPedido.nombre}, AHORA VAMOS A ARMAR TU PEDIDO!!
        TE LO ENVIAREMOS A ${datosPedido.domicilio} Y CUALQUIER DUDA NOS COMUNICAREMOS CON VOS AL ${datosPedido.telefono}
        SI TODOS LOS DATOS QUE INGRESASTE SON CORRECTOS SIGAMOS, ASI TE LLEVAMOS LO MAS RAPIDO POSIBLE EL PEDIDO</p> 
        <div id="container" class="row">  
            <button class="btn btn-primary cargar" onClick="cargarProductos()">ARMEMOS TU PEDIDO!!</button>`
        </div>  
        nuevoCliente.className = "datos-Clientes"
        document.body.appendChild(nuevoCliente);*/
        /* LUCAS NO ME FUNCIONA NADAAAAAA JAJAJA QUIERO MATARRMEEEEEEEEEEEE 
        Y QUIERO APLICAR UN RETURN PERO YA NO SE DONDE VA CADA COSA*/
