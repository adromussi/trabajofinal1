//Incorporar arrays

class pedidoSushi {
    constructor({nombre, pedido, agregados, cantidad}) {
      this.nombre = nombre;
      this.pedido = pedido;
      this.agregados = agregados;
      this.cantidad = cantidad;
      
      
  }
}
const pedido1 = new pedidoSushi({ nombre: "ana", pedido: "todo salmon", agregados:"si", cantidad: "3" });
const pedido2 = new pedidoSushi({ nombre: "juan", pedido:"gold", agregados: "no", cantidad:"2" });
const pedido3 = new pedidoSushi({ nombre: "pedro", pedido: "deluxe", agregados: "si", cantidad:"3"});
const pedido4 = new pedidoSushi({ nombre: "ana", pedido: "deluxe", agregados: "si", cantidad: "2" });
const pedido5 = new pedidoSushi({ nombre: "pedro", pedido: "todo salmon", agregados: "no", cantidad: "1" });


const pedidosNuevos = [];

pedidosNuevos.push(pedido1, pedido2, pedido3, pedido4, pedido5);

console.log (pedidosNuevos)

const cliente = pedidosNuevos.find ((p) => p.nombre === "ana");
console.log(cliente);

const pedidosFilter = pedidosNuevos
  .filter((p) => p.nombre === "pedro")
  .filter((p) => p.pedido === "deluxe");

console.log(pedidosFilter);

let deluxeCant = 0;
let tsalmonCant = 0;
const arrayOnlyName = [];
for( const pedidoSushi of pedidosNuevos){
   if(pedidoSushi.pedido === `deluxe`){
     deluxeCant++;
   }
   if(pedidoSushi.pedido === `todo salmon`){
    tsalmonCant++;
  }
  arrayOnlyName.push ( pedidoSushi.nombre)
}
console.log (`la cantidad de combos deluxe son: ${deluxeCant}`);
console.log (`la cantidad de combos todo salmon son: ${tsalmonCant}`);
console.log (arrayOnlyName.join(`**`));


/*for (nombre, pedido, agregados, cantidad) {
  let nombre   = prompt("Nombre del producto N° " + i)
  let pedido = parseInt(prompt("Cantidad del producto N° "+ i))
  let agregados   = parseInt(prompt("Precio del producto N° " + i))
  let cantidad   = parseInt(prompt("Precio del producto N° " + i))
}

//pedidoSushi.map((p) => p.agregados(no));


/*for (let i = 1; i <= cantidad; i++) {
    
    let nombre   = prompt("Nombre del producto N° " + i)
    let cantidad = parseInt(prompt("Cantidad del producto N° "+ i))
    let precio   = parseInt(prompt("Precio del producto N° " + i))
envio(si)
  this.conEnvio = this.conEnvio + si ;
   console.log (`${this.nombre} vas a querer que te enviemos el pedido?`);
   if (this.conEnvio === envio) {
    console.log (`${this.nombre} indicanos porfavor tu domicilio`);
   }
   else {
    console.log (`${this.nombre} en 30 min podes retirarlo por el local`);
   }*/
