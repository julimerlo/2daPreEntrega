let carritoEnLs = JSON.parse(localStorage.getItem("listaServicios2"));
let carritoDeCompras = [];

const renderServicios = () => {
  if (carritoEnLs) {
    carritoDeCompras = carritoEnLs;
    let div = "";
    let total = 0;
    const contenedorCarrito = document.getElementById("carrito-contenedor");
    carritoDeCompras.forEach((elemento) => {
      total += Number(elemento.precio);
      div += `
        <div class="productoEnCarrito">
          <p>${elemento.nombre}</p>
          <p>Precio: ${elemento.precio}</p>
          <button onClick="borrarServicio(${elemento.id})" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>
        </div>
      `;
    });
    contenedorCarrito.innerHTML = div;

    if (total > 0) {
      document.getElementById("totalContainer").style.display = "block";
      document.getElementById("totalCarrito").innerHTML = total;
    } else {
      document.getElementById("totalContainer").style.display = "none";
      document.getElementById("totalCarrito").innerHTML = 0;
    }
  }
};

renderServicios();

const carritoIndex = (productoId) => {
  const contenedorCarrito2 = document.getElementById("carrito-contenedor");

  const existe = carritoDeCompras.some((producto) => producto.id == productoId);
  if (existe) {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "El servicio ya se encuentra en el carrito!",
      showConfirmButton: false,
      timer: 1800,
    });
  } else {
    let producto = cortes.find((producto) => producto.id == productoId);
    carritoDeCompras.push(producto);
    let div = document.createElement("div");
    div.classList.add("productoEnCarrito");
    div.innerHTML = ` <p>${producto.nombre}</p>
                      <p>Precio: ${producto.precio}</p> 
                      <button onClick="borrarServicio(${producto.id})" class="boton-eliminar" ><i class="fa-solid fa-trash-can"></i></button>`;
    contenedorCarrito2.appendChild(div);

    localStorage.setItem("listaServicios2", JSON.stringify(carritoDeCompras));

    let total = document.getElementById("totalCarrito").innerHTML;
    total = Number(total) + Number(producto.precio);
    console.log({ total2: total });
    document.getElementById("totalCarrito").innerHTML = total;

    if (total > 0) {
      document.getElementById("totalContainer").style.display = "block";
      document.getElementById("totalCarrito").innerHTML = total;
    } else {
      document.getElementById("totalContainer").style.display = "none";
      document.getElementById("totalCarrito").innerHTML = 0;
    }

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Servicio agregado al carrito!",
      showConfirmButton: false,
      timer: 1800,
    });
  }
};
console.log(carritoDeCompras);

const borrarServicio = (productoId) => {
  const item = carritoDeCompras.find((producto) => producto.id == productoId);
  const index = carritoDeCompras.indexOf(item);
  carritoDeCompras.splice(index, 1);
  localStorage.setItem("listaServicios2", JSON.stringify(carritoDeCompras));
  renderServicios();
};
