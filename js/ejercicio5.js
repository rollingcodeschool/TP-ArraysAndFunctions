// Definir una función que muestre información sobre una cadena de texto que se le pasa como argumento. A partir de la cadena que se le pasa, la función determina si esa cadena está formada sólo por mayúsculas, sólo por minúsculas o por una mezcla de ambas.
function informacion(cadena){
    if(cadena === cadena.toUpperCase()){
        return 'completamente en mayúsculas';
    }else if(cadena === cadena.toLowerCase()){
        return 'completamente en minúsculas';
    }else{
        return 'con mayúsculas y minúsculas';
    }
}

let cadena=prompt("Ingrese una texto para analizar");
document.write(`El texto ingresado esta escrito ${informacion(cadena)}`);