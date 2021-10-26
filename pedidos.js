//Incorporar arrays

class pedidoSushi {
    constructor(nombre, pedido, agregados, cantidad, envio, domicilio) {
      this.nombre = nombre;
      this.pedido = pedido;
      this.agregados = agregados;
      this.cantidad = cantidad;
      this.envio = envio;
      this.domicilio = domicilio;
      
  }
}
const pedido1 = new pedidoSushi({ nombre: "ana", pedido: "todo salmon", agregados:"si", cantidad: "3" });
const pedido2 = new pedidoSushi({ nombre: "juan", pedido:"gold", agregados: "no", cantidad:"2" });
const pedido3 = new pedidoSushi({ nombre: "pedro", pedido: "deluxe", agregados: "si", cantidad:"3"});
const pedido4 = new pedidoSushi({ nombre: "ana", pedido_: "deluxe", agregados: "si", cantidad: "2" });
const pedido5 = new pedidoSushi({ nombre: "pedro", pedido: "todo salmon", agregados: "no", cantidad: "3" });


const pedidosNuevos = [];

pedidosNuevos.push(pedido1, pedido2, pedido3, pedido4, pedido5);

console.log (pedidosNuevos)

const cliente = pedidosNuevos.find ((p) => p.nombre === "ana");
console.log(cliente);

const pedidosFilter = pedidosNuevos
  .filter((p) => p.nombre === "pedro")
  .filter((p) => p.pedido === "deluxe");

console.log(pedidosFilter);

pedidoSushi.map((p) => p.envio(si));










//-----------------Iterador---------------------
/*

 recibeAtaque(valor) {
    this.puntosDeVida = this.puntosDeVida - valor;
    console.log(`${this.nombre} recibio un ataque de ${valor}`);

    if (this.puntosDeVida <= 0) {
      console.log(`${this.nombre} ha muerto`);
    } else {
      this.imprimeVida();
    }
  }
  recibeCuracion(valor) {
    this.puntosDeVida = this.puntosDeVida + valor;
    console.log(`${this.nombre} recibio una curación de ${valor}`);
    this.imprimeVida();
  }
  imprimeVida() {
    console.log(`Ahora le quedan ${this.puntosDeVida} puntos de vida`);
  }
}

const goblin1 = new Personaje({ clase: "Goblin", nombre: "Goblino" });
const humano1 = new Personaje({ clase: "Humano", nombre: "Golum" });
const elfo1 = new Personaje({ clase: "Elfo", nombre: "Legolas" });
const hobbit1 = new Personaje({ clase: "Hobbit", nombre: "Frodo" });
const hobbit2 = new Personaje({ clase: "Hobbit", nombre: "Sam" });

//console.log(goblin1);

const personajes = [];

personajes.push(goblin1, humano1, elfo1, hobbit1, hobbit2);

console.log(personajes);

const encontrado = personajes.find((p) => p.clase === "Hobbit");
console.log(encontrado);

const personajesFiltrados = personajes
  .filter((p) => p.clase === "Hobbit")
  .filter((p) => p.nombre === "Sam");

console.log(personajesFiltrados);

personajes.map((p) => p.recibeAtaque(100));

console.log(personajes);
   for (let i = 1; i <= cantidad; i++) {
    let nombre   = prompt("Nombre del producto N° " + i)
    let pedido = parseInt(prompt("Cantidad del producto N° "+ i))
    let agregados   = parseInt(prompt("Precio del producto N° " + i))
    let cantidad   = parseInt(prompt("Precio del producto N° " + i))
    let envio   = parseInt(prompt("Precio del producto N° " + i))
    let domicilio   = parseInt(prompt("Precio del producto N° " + i))}
    
    //Metodo push
    respuesta.push(new pedidoSushi((nombre, pedido, agregados, cantidad, envio, domicilio)),



//Metodo find
    const busqueda = respuesta.find(e => e.nombre === "Zapallo")
    console.log(busqueda)

//Mostrar Array
console.log(respuesta),

//-----------------Ordenar un array de objetos-------------------



console.log(respuesta),



-----Precio---------
respuesta.sort(function(a,b){
    return a.precio < b.precio;
}),

console.log(respuesta)*/
