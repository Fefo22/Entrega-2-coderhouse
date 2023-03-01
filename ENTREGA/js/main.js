
function sumar(a, b) {
  return a + b;
}

let participantes = [];
let num = parseInt(prompt("Cuántos participantes quieres ingresar?"));

for (let i = 0; i < num; i++) {
  let nombre = prompt("Ingresa el nombre de un participante ");
  participantes.push(nombre);
}

let contador = 0;
let resultados = {};

while (contador < 5) {
  let participanteElegido = participantes[Math.floor(Math.random() * participantes.length)];
  alert("El participante elegido es " + participanteElegido);

  let numeroAleatorio = Math.ceil(Math.random() * 3);

  const prenda1 = "tomar un fondo blanco";
  const prenda2 = "llamar a un familiar y pedir dos empanadas de pollo";
  const prenda3 = "reaccionar a la historia número 10 que te salga en Instagram";

  let prendaAleatoria;

  switch (numeroAleatorio) {
    case 1:
      prendaAleatoria = prenda1;
      break;
    case 2:
      prendaAleatoria = prenda2;
      break;
    case 3:
      prendaAleatoria = prenda3;
      break;
  }

  let respuesta = prompt("El participante " + participanteElegido + " tiene que " + prendaAleatoria + ". ¿Lo haces?");

  if (respuesta === "no") {
    contador++;
    if (resultados[participanteElegido]) {
      resultados[participanteElegido].no++;
    } else {
      resultados[participanteElegido] = { si: 0, no: 1 };
    }
  } else if (respuesta === "si") {
    if (resultados[participanteElegido]) {
      resultados[participanteElegido].si++;
    } else {
      resultados[participanteElegido] = { si: 1, no: 0 };
    }
  } else {
    alert("Por favor ingresa 'si' o 'no'");
  }
}

alert("Un participante ha respondido 5 veces 'no', el juego ha terminado.");

// Calcular la suma de los resultados
let sumaSi = 0;
let sumaNo = 0;
for (let participante in resultados) {
  sumaSi = sumar(sumaSi, resultados[participante].si);
  sumaNo = sumar(sumaNo, resultados[participante].no);
}

// Mostrar resultados 
document.write("<h2>Resultados:</h2>");
document.write(`<p>Total: Sí ${sumaSi} / No ${sumaNo}</p>`);
for (let participante in resultados) {
  document.write(`<p>${participante}: Sí ${resultados[participante].si} / No ${resultados[participante].no}</p>`);
}

// Crear Prendas

class Prenda{
  constructor(nombre, dificultad, indicacion){
      this.nombre = nombre;
      this.dificultad = dificultad;
      this.indicacion = indicacion;
  }
}

const prenda4 = new Prenda("Beso a Beso", "3", "Dale un beso en la boca a cada jugador.");
const prenda5 = new Prenda("T Rex", "1", "Girá 6 veces con las manos en posición de T-Rex. Si, leíste bien, mostrá ese dinosaurio interior.");
const prenda6 = new Prenda("Stalker", "2", "Poné un Me gusta en una foto vieja de Instagram a una persona al azar que indique algún oponente.");




