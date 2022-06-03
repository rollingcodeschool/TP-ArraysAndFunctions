// Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.

// simular el lanzamiento de los dados y registrar la suma de ambos numeros.
let sumas = [];

for (let i = 0; i < 50; i++) {
  let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
  sumas.push(dado1 + dado2);
}

//quitamos los numeros duplicados de la muestra de sumas en un nuevo arreglo
// indexOf = retorna el primer indice del arreglo en donde se encuentre un elemento dado.
// En este caso, podemos identificar un duplicado cuando el indice no es igual al resultado de indexOf
let muestraSinDuplicados = sumas.filter(
  (item, index) => sumas.indexOf(item) === index
);
console.log(muestraSinDuplicados);

// contar la cantidad de veces que se repitio una muestra
let resultado = [];

for (i = 0; i < muestraSinDuplicados.length; i++) {
  let repeticiones = 0;
  for (j = 0; j < sumas.length; j++) {
    if (muestraSinDuplicados[i] === sumas[j]) repeticiones++;
  }
  resultado[i] = repeticiones;
}

// muestro los resultados
document.write(`<table>
<thead>
    <tr>
        <th>Sumas de los dados 🎲🎲</th>
        <th>Cantidad de repeticiones</th>
    </tr>
</thead>
<tbody>`);
for (let i = 0; i < muestraSinDuplicados.length; i++) {
  document.write(`
    <tr>
        <td>${muestraSinDuplicados[i]} </td>
        <td>${resultado[i]} </td>
    </tr>`);
}
document.write(`
    </tbody>
</table>`);

