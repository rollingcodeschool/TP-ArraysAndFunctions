
// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// Primer paso, simular el lanzamiento de los dados y registrar la suma de ambos numeros.
let numeros = [];
let dados1 = [];
let dados2 = [];
let sumas = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  dados1.push(dado1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  dados2.push(dado2);
  sumas.push(dado1 + dado2);
}
document.write(`<br>Primer dado: ${dados1}`);
document.write(`<br>Segundos dado: ${dados2}`);
document.write(`<br>sumas: ${sumas}`);

// Segundo paso, solo para verificar mas adelante buscamos cuantas veces se repitio cada numero
let muestras = [];
let cuantasApariciones = [];

for (i = 0; i < sumas.length; i++) {
  muestras[i] = sumas[i];
  let repeticiones = 0;
  for (j = 0; j < sumas.length; j++) {
    if (muestras[i] === sumas[j]) repeticiones++;
  }
  cuantasApariciones[i] = repeticiones;
}
document.write(`<br><br>muestras: ${muestras}`);
document.write(`<br>repeticiones: ${cuantasApariciones}`);

//Tercer paso, quitamos los numeros duplicados de la muestra
// indexOf = retorna el primer indice del arreglo en donde se encuentre un elemento dado.
// En este caso, podemos identificar un duplicado cuando el indice no es igual al resultado de indexOf
let muestraSinDuplicados = sumas.filter((item, index) => {
  return sumas.indexOf(item) === index;
});
console.log(muestraSinDuplicados);

// Cuarto paso, contar la cantidad de veces que se repitio una muestra
let resultado = [];

for (i = 0; i < muestraSinDuplicados.length; i++) {
  let repeticiones = 0;
  for (j = 0; j < sumas.length; j++) {
    if (muestraSinDuplicados[i] === sumas[j]) repeticiones++;
  }
  resultado[i] = repeticiones;
}

document.write(`<br><br>Sumas de los dados: ${muestraSinDuplicados}`);
document.write(`<br>Cantidad de repeticiones: ${resultado}`);