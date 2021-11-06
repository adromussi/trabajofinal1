class sushi {
    constructor(nombre, pedido, agregados, cantidad, domicilio) {
      this.nombre = nombre;
      this.pedido = pedido;
      this.agregados = agregados;
      this.cantidad = cantidad;
      this.domicilio = domicilio;
      
    }
    saludar() {
      return "¡Hola " + this.nombre + " vamos a revisar tu pedido!";
    }
  }
  const nombre = prompt("Ingresa tu nombre ");
  const pedido = prompt("Carguemos tu pedido");
  const agregados = prompt("Que agregados vas a querer? (wasabi/jengibre/soja/palitos)");
  const cantidad = prompt("Para cuantas personas?")
  const domicilio = prompt("¡Indicanos tu domicilio!")
  const nuevo_pedido = new sushi(nombre, pedido, agregados, cantidad, domicilio );
  alert(nuevo_pedido.saludar());
  alert(
    " Pediste " +
      nuevo_pedido.pedido +
      " agregamos " +
      nuevo_pedido.agregados +
      " para " +  
      nuevo_pedido.cantidad + " personas " +
      " te lo enviaremos a " + 
      nuevo_pedido.domicilio +
      " Muchas gracias por confiar en nosotros "
  );
  