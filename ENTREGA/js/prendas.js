
class Prenda{
    constructor(nombre, dificultad, indicacion){
        this.nombre = nombre;
        this.dificultad = dificultad;
        this.indicacion = indicacion;
    }
  }

const prendas = [];

for (let index = 0; index < 3; index++) {
  let nombre = prompt("NOMBRE:");
  let dificultad = '';
  while (dificultad !== '1' && dificultad !== '2' && dificultad !== '3') {
    dificultad = prompt("DIFICULTAD (1, 2 o 3):");
    if (isNaN(dificultad) || dificultad === '') {
      dificultad = '';
    }
  }
  let indicacion = prompt("INDICACION:");
  let prenda = new Prenda(
    nombre,
    dificultad,
    indicacion
  );
  prendas.push(prenda);
}

const prendasDificultad1 = prendas.filter(prenda => prenda.dificultad === '1');
const prendasDificultad2 = prendas.filter(prenda => prenda.dificultad === '2');
const prendasDificultad3 = prendas.filter(prenda => prenda.dificultad === '3');

console.log("Prendas de dificultad 1:", prendasDificultad1);
console.log("Prendas de dificultad 2:", prendasDificultad2);
console.log("Prendas de dificultad 3:", prendasDificultad3);
