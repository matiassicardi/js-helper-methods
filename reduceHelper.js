// +*+*+*+*+*+ reduce helper +*+*+*+*+*+
//el método reduce condensa los valores que se le pasan, agregando un vuelta de tuerca que es la posibilidad de setear el valor inicial del cual se parte para la condensación de valores
let newNumbers = [ 10, 20, 30 ];
let sum = 0;
//si utilizáramos el método 'for' el código sería
for (let i = 0; i < newNumbers.length; i++) {
    sum += newNumbers[i];
};
//utilizando el método 'reduce' podemos no solamente realizar esta iteración y suma, sino además agregarle un valor inicial del cual comenzar a hacer la suma
mySumWithInitialValue = newNumbers.reduce(function(sum, number) {
    return sum + number;
}, 0);// acá seteamos como valor inicial de la iteración y suma al 0, pero podríamos colocar cualquier valor

//podemos utilizar el método 'reduce' con cualquier tipo de valores, por ejemplo acá con strings
let primaryColors = [
    {color:'red'},
    {color:'yellow'},
    {color:'blue'}
];
//si lo que buscamos es obtener un array de strings con los valores de los colores primarios, el código será
const primaryColorsValue = primaryColors.reduce(function(previous, primaryColors) {
    previous.push(primaryColors.color);
    return previous;
}, []);// le asignamos como valor inicial un objeto vacío, y lo llamaremos como querramos al enviarlo como parámetro en la función del 'reduce', en este caso 'previous'

//también podemos usar el método 'reduce' para reconocer un balance de llaves dentro del propio código
function balacedParens(string) {
    return !string.split("").reduce(function(previuos, char) {
        if (previuos < 0) {return previuos}//chequeamos que la primer llave no venga incompleta
        if (char === "(") {return ++previuos;}//sumamos 1 por cada llave que comienza
        if (char === ")") {return --previuos;}//restamos 1 por cada llave que cierra
        return previuos;
    }, 0);
};//el objetivo es que el balance de 0 sin comenzar por una llave de cierre
//las siguientes ejecuciones darán 'true'
balacedParens("(())")
balacedParens("()()")
//las siguientes ejecuciones darán 'false'
balacedParens("(()")
balacedParens(")()")