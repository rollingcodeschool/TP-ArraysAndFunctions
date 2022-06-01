/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
*/

let cities = [];
let exit = true;
do {
  let city = prompt("Ingrese una ciudad o presione 0 para salir del programa");
  if (city === null) {
    exit = false;
  } else {
    cities.push(city);
    console.log(city);
  }
} while (exit);

console.log(cities);

// Mostrar la longitud del arreglo.
document.write(
  `<p>El arreglo de ciudades tiene ${cities.length} elementos</p>`
);
// Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
document.write(`<ul>
<li>Elemento 1er posicion: ${cities[0]} </li>
<li>Elemento 3er posicion: ${cities[2]} </li>
<li>Elemento ultima posicion: ${cities[cities.length - 1]}  </li>
</ul>`);

// Añade en última posición la ciudad de París.
cities.push("Paris");
// Escribe por pantalla el elemento que ocupa la segunda posición.
document.write(`<ul>
<li>Elemento 2da posicion: ${cities[1]} </li>
</ul>`);

// Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.
cities.splice(1, 0, "Barcelona");

// muestro todo el arreglo
document.write(`<h1>Arreglo de ciudades</h1>`);
document.write(`<ul>`);
for (let i = 0; i < cities.length; i++) {
  document.write(`<li>Elemento: ${cities[i]} </li>`);
}
document.write(`</ul>`);
