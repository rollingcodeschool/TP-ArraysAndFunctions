
let resultados=[];

//Cargamos todos los resultados
for (let i = 0; i < 50; i++) {
    let dado1=Math.floor(Math.random()*6+1);
    let dado2=Math.floor(Math.random()*6+1);
    let suma=dado1+dado2;
    resultados[i]=suma;
}

//Imprimimos la frecuencia con la que se repiten
document.write(`<table><tbody>`);
document.write(`<td>Resultado</td> <td>Frecuencia</td>`);
for (let i = 2,cont =0 ; i <= 12; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < resultados.length; j++) {
        if(i===resultados[j]){
            cont++; 
        }
    }
    document.write(`<td>${i}</td> <td>${cont}</td>`);
    document.write(`</tr>`);
    cont=0;
}
document.write(`</table></tbody>`);
