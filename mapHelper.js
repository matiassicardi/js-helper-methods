// +*+*+*+*+*+ map helper +*+*+*+*+*+
// el método 'map' te permite tomar los valoes de un array, y en base a esos valores crear un nuevo array, evitando cambios en el primer array
//si utilizaramos un 'for' el código sería
var numbers = [1,2,3];
var doubledNumbers = [];
for (var i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
};
console.log(doubledNumbers);

//utilizando el 'map' el código es
var newNumbers = [1,2,3];
var newDoubledNumbers = newNumbers.map(function(number) {
    return number * 2;
});
console.log(newDoubledNumbers);

//también podemos utilizar 'map' para iterar valores dentro de objetos que están dentro de un array. Por ejemplo:
var cars = [
    {model: 'Buick', price: '100'},
    {model: 'Camaro', price: '200'}
];
var prices =cars.map(function(car){
    return car.price;
});
console.log(prices);