// +*+*+*+*+*+ every helper & some helper +*+*+*+*+*+
//el método 'every' permite chequear si todos los elementos de un array cumplen con una condición, mientras que el método 'some' permite chequear si alguno de los elementos de un array cumplen con una condición
//si se usara un 'for' el código quedaría así
var computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];
var allComputersCanRunProgram = true;
var onlySomeComputersCanRunProgram = false;
for (var i =0; i < computers.length; i++) {
    var computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
};
//usando el método'every' y el método 'some' el código quedaría de esta manera. En el primer caso se validará si todos los elementos cumplen la condición y en el segundo se validará si por lo menos un elemento cumple la función
var myComputers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];
var allmyComputersCanRunProgram = myComputers.every(function(computer){
    return computer.ram > 16;
});
var onlySomeComputersCanRunProgram = myComputers.every(function(computer){
    return computer.ram > 16;
});