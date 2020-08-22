// +*+*+*+*+*+ map helper +*+*+*+*+*+
// el método 'map' te permite tomar los valoes de un array, y en base a esos valores crear un nuevo array, evitando cambios en el primer array
//si utilizaramos un 'for' el código sería
let numbers = [1,2,3];
let doubledNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    doubledNumbers.push(numbers[i] * 2);
};
console.log(doubledNumbers);

//utilizando el 'map' el código es
let newNumbers = [1,2,3];
const newDoubledNumbers = newNumbers.map(number => number * 2);
console.log(newDoubledNumbers);

//también podemos utilizar 'map' para iterar valores dentro de objetos que están dentro de un array. Por ejemplo:
let cars = [
    {model: 'Buick', price: '100'},
    {model: 'Camaro', price: '200'}
];
const prices =cars.map(car => car.price);
console.log(prices);