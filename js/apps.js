fetch("./data.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      const servicios = document.getElementById("servicios");
      const div = document.createElement("div");
      div.innerHTML += `<div class="card text-bg-dark mb-3" style="width: 18rem;">
                        <h4>${item.nombre}</h4>
                        <p>Precio: $${item.precio}</p>
                        <p>${item.descripcion}</p>
                        <button class="btn btn-primary" id=boton${item.id}>Agregar</button>
                      </div>`;

      servicios.appendChild(div);

      const boton = document.getElementById(`boton${item.id}`);
      boton.addEventListener("click", () => {
        carritoIndex(item.id);
        console.log(item.id);
      });
    });
  });


const Reservar = () => {
  let carritoEnLs = JSON.parse(localStorage.getItem("listaServicios2"));
  if (!carritoEnLs || !carritoEnLs.length) {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Seleccione al menos un servicio",
      showConfirmButton: false,
      timer: 1800,
    });
    return;
  }

  const nombre = document.getElementById('nombre').value;
  const celular = document.getElementById('celular').value;

  if (!nombre || !celular) {
    Swal.fire({
      position: "top-end",
      icon: "warning",
      title: "Debe completar todos los datos",
      showConfirmButton: false,
      timer: 1800,
    });
    return;
  }

  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Reserva confirmada",
    showConfirmButton: false,
    timer: 1800,
  });

  localStorage.clear();
  document.getElementById("carrito-contenedor").replaceChildren();
  document.getElementById('totalContainer').style.display = 'none';
  document.getElementById('totalCarrito').innerHTML = 0;
};