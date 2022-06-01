// 1-Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo

let month = ['Enero','Febrero','Marzo', 'Abril', 'Mayo','Junio','Julio','Agosto', 'Septiembre','Octubre','Noviembre','Diciembre' ];

document.write('<h1>Lista de Meses</h1>');
document.write('<ul>');
for(let i=0; i < month.length; i++){
    document.write(`<li>${month[i]}</li>`)
}
document.write('</ul>');