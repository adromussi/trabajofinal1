let productos = [
    {id: `ts`, nombre:`combo todo salmon`,piezas:`15`,precio:`$1500`},
    {id: `gl`, nombre:`combo gold`,piezas:`15`,precio:`$1500`},
    {id: `dl`, nombre:`combo deluxe`,piezas:`45`,precio:`$1500`},
    {id: `sm`, nombre:`combo smile`,piezas:`30`,precio:`$1500`},
    {id: `fs`, nombre:`combo fusion`,piezas:`15`,precio:`$1500`},
    {id: `vg`, nombre:`combo veggie`,piezas:`12`,precio:`$1500`},
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



