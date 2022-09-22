class cliente {
  constructor(data) {
    this.nombreApellido = data.nombreApellido;
    this.cel = data.cel;
  }
}

let cliente1 = new cliente({
  nombreApellido: "",
  cel: "",
});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
  e.preventDefault();
  let inputs = e.target.children;

  cliente1.nombreApellido = inputs[2].value;
  cliente1.cel = parseInt(inputs[4].value);
});
