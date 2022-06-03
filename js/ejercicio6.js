// Solicitar por pantalla al usuario ingresar el valor de los lados de un rectángulo, luego crear una función para calcular su perímetro y mostrarlo por pantalla.

// La fórmula del perímetro  es p = 2*(a +b)

const perimetroRectangulo=(lado1, lado2)=>{
    return 2*(lado1+lado2);
}

let lado1=parseFloat(prompt('Ingrese un lado del rectángulo en centímetros'));
let lado2=parseFloat(prompt('Ingrese el siguiente lado del rectángulo en centímetros'));

document.write(`El perimetro del rectángulo ingresado es: ${perimetroRectangulo(lado1, lado2)} cm.`);