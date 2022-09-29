const mostrarProductos = (productos) => {
  const servicios = document.getElementById("servicios");

  cortes.forEach((item) => {
    const div = document.createElement("div");
    /*  div.classList.add("d-flex"); */
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
};

mostrarProductos(cortes);
