// Escriba un script que muestre la tabla de multiplicar de un número ingresado por pantalla, la creación de la tabla debe ser realizada con una función y mostrar solo los resultados del 1 al 10 del número elegido por el usuario.

function tablaMultiplicar(numero){
    document.write(`<table>
    <thead>
        <tr>
            <th colspan="2">Tabla de multiplicar</th>
        </tr>
    </thead>
    <tbody>`);

    for(let i=1; i<=10; i++){
        document.write(`
        <tr>
            <td>${numero} * ${i} </td>
            <td>${numero * i}</td>
        </tr>`);  
    }
    document.write(`</tbody> </table>`);
}

let numero=parseInt(prompt("Ingrese el numero para mostrar su tabla de multiplicar"));
tablaMultiplicar(numero);