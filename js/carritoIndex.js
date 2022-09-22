let carritoEnLs = JSON.parse(localStorage.getItem("listaServicios2"));
let carritoDeCompras = [];

console.log(carritoEnLs);

if (carritoEnLs) {
  carritoDeCompras = carritoEnLs;
  carritoDeCompras.forEach((elemento) => {
    const contenedorCarrito = document.getElementById("carrito-contenedor");
    let div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = ` <p>${elemento.nombre}</p>
    <p>Precio: ${elemento.precio}</p> 
    <button id="eliminar${elemento.id}" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
    contenedorCarrito.appendChild(div);
  });
}

const carritoIndex = (productoId) => {
  const contenedorCarrito2 = document.getElementById("carrito-contenedor");

  const existe = carritoDeCompras.some((producto) => producto.id == productoId);
  if (existe) {
    alert("El servicio ya se encuentra en el carrito");
  } else {
    const renderProductosCarrito = () => {
      let producto = cortes.find((producto) => producto.id == productoId);
      carritoDeCompras.push(producto);
      let div = document.createElement("div");
      div.classList.add("productoEnCarrito");
      div.innerHTML = ` <p>${producto.nombre}</p>
                        <p>Precio: ${producto.precio}</p> 
                        <button id="eliminar(${producto.id})" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
      contenedorCarrito2.appendChild(div);

      /* Para borrar en el carrito. No me funciona!!*/
      const botonBorrar = document.getElementById(`eliminar(${producto.id})`);
      botonBorrar.addEventListener("click", () => {
        borrarServicio(producto.id);
      });

      const guardarStorage2 = (clave, valor) => {
        localStorage.setItem(clave, valor);
      };
      guardarStorage2("listaServicios2", JSON.stringify(carritoDeCompras));
    };

    alert("Se agrego el servicio al carrito!");
    renderProductosCarrito();
  }
};
console.log(carritoDeCompras);

/* Funcion para borrar en el carrito.. no me funciona!!*/
const borrarServicio = (productoId) => {
  const item = carritoDeCompras.find((producto) => producto.id == productoId);
  const index = carritoDeCompras.indexOf(item);
  carritoDeCompras.splice(index, 1);
};

/* Hora */
/* const botonHora = document.getElementById(`botonHora`);
botonHora.addEventListener("click", () => {
  const horarios = document.getElementById("horarios");
  const div = document.createElement("div");
  div.innerHTML += `<div>
                        <h4>''</h4>
                    </div>`;

  horarios.appendChild(div);
}); */
