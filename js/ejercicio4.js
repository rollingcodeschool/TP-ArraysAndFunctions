// 1- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función.
function numeroPar(numero) {
  if (numero % 2 === 0) {
    return "es par";
  } else {
    return "es impar";
  }
}

let num = parseInt(prompt("Ingrese un número"));
document.write(`El número ${num} ${numeroPar(num)}`);
