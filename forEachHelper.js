// +*+*+*+*+*+ forEach helper +*+*+*+*+*+
//supongamos que tenemos el siguiente array
var colors = ['red', 'green', 'blue'];
//para recorrer el array y obtener un resultado, podemos usar:
for (var i=0; i < colors.length; i++) {
    console.log(colors[i]);
}
//sin embargo, usando el 'forEach' se obtiene el mismo resultado pero se usa menos código y con menos posibilidad de error de tipeo:
colors.forEach(function(color) {
    console.log(color);
});

//forEach tambien puede usarse de la siguiente manera
//supongamos que queremos iterar un array para que nos de la suma de su contenido.
var numbers = [1,2,3,4,5]
var sum = 0;
//podemos crear la función que suma
function adder(number) {
    sum += number;
};
//y luego iterar la función dentro del 'forEach'
numbers.forEach(adder);