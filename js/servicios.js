/* Lista de horarios  */

const horariosCorte = ["8:00", "9:00", "10:00", "11:00", "12:00"];

let listaHorarios = document.getElementById("listaHorarios");

for (let index = 0; index < 5; index++) {
  let div = document.createElement("div");
  div.innerHTML = `<button id="botonHora">${horariosCorte[index]}HS</button>`;

  listaHorarios.append(div);
}

/* Lista de cortes */

const cortes = [
  {
    id: 1,
    nombre: "CORTE",
    precio: 1500,
    cantidad: 1,
    descripcion:
      "Realizamos distintos tipos de corte de cabello tanto con tijeras, navaja y máquina.Nuestro equipo está capacitado con las últimas técnicas y tendencias para asesorar a cada cliente a conseguir su estilo único.",
  },
  {
    id: 2,
    nombre: "AFEITADO",
    precio: 2000,
    cantidad: 1,
    descripcion:
      "Tenemos tres tipos de afeitado: CONTEMPORÁNEO Con máquina shaver y perfiles con navaja. CLÁSICO Toallas calientes, espuma y navaja. SPA Toallas + Vapor Ozono, espuma y navaja.",
  },
  {
    id: 3,
    nombre: "TRATAMIENTOS",
    precio: 2500,
    cantidad: 1,
    descripcion:
      "Para adicionar a nuestros servicios, podemos hacer: MÁSCARA NEGRA Elimina los puntos negros del rostro. EXFOLIACIÓN Limpia la piel de grasitud y remueve las células muertas del rostro.",
  },
  {
    id: 4,
    nombre: "COLOR",
    precio: 3000,
    cantidad: 1,
    descripcion: "Teñido de cabello.",
  },
];
