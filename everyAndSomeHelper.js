// +*+*+*+*+*+ every helper & some helper +*+*+*+*+*+
//el método 'every' permite chequear si todos los elementos de un array cumplen con una condición, mientras que el método 'some' permite chequear si alguno de los elementos de un array cumplen con una condición
//si se usara un 'for' el código quedaría así
let computers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];
const allComputersCanRunProgram = true;
const onlySomeComputersCanRunProgram = false;
for (let i =0; i < computers.length; i++) {
    let computer = computers[i];
    if (computer.ram < 16) {
        allComputersCanRunProgram = false;
    } else {
        onlySomeComputersCanRunProgram = true;
    }
};
//usando el método'every' y el método 'some' el código quedaría de esta manera. En el primer caso se validará si todos los elementos cumplen la condición y en el segundo se validará si por lo menos un elemento cumple la función
let myComputers = [
    {name: 'Apple', ram: 24},
    {name: 'Compaq', ram: 4},
    {name: 'Acer', ram: 32}
];
const allmyComputersCanRunProgram = myComputers.every(computer => computer.ram > 16);
const onlySomeComputersCanRunProgram = myComputers.some( computer => computer.ram > 16);