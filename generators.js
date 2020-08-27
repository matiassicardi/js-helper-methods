//Existe un tipo de función llamada 'generator', esta es una función de la que se puede entrar y salir múltiples veces.
//su sintaxis es:
function* numbers(){//se debe agregar el '*' ya sea inmediatamente después de 'function' como inmediatamente antes de nombre de la función ('function*' o '*numbers')
    yield;//se debe agregar la keyword 'yield'
};
//al llamar a la función obtendremos devuelta un objeto '{}'
const gen = numbers();

//una pequeña explicación sobre la sintaxis funciones 'generators', ya que no es exactamente igual al resto de la funciones
//vamos a crear una 'generator function' en la que realizaremos el proceso de:
//-> a) salir de casa 
//-> b) comenzar a caminar hacia una librería
//-> c) entrar a la librería
//-> d) comprar el libro
//-> e) salir de la librería con el libro
//-> f) volver a casa
//-> g) entrar en el lavadero, buscar la ropa limpia
//-> f) salir del lavadero
//-> i) llegar a a nuestra casa
//-> j) entrar en casa con todo resuelto
function* bookShopping() {
    //coding de 'b) comenzar a caminar hacia una librería'
    
    const bookFromTheLibrery = yield 'cash';//disparador de 'c) entrar a la librería', en este caso con 'cash' para pagar

    //coding de 'f) volver a casa'

    const cleanClothes = yield 'laudry';//coding para 'g) entrar en el lavadero, buscar la ropa limpia'

    //codinga para 'i) llegar a a nuestra casa'

    return [bookShopping, cleanClothes];//coding para 'j) entrar en casa con todo resuelto'
};
//Acá se realiza el coding para lo que sucede fuera de la 'generator function', los puntos a), d) y e)
const gen = bookShopping();//llamamos a la función, pero en este tipo de funciones, llamarla no es dispararla
gen.next();//disparamos la función, es decir, se produce 'a) salir de casa'
//coding de 'd) comprar el libro'
gen.next('book');//disparador de 'e) salir de la librería con el libro', donde al salir la const 'bookFromTheLibrery'
gen.next('clean clothes');//coding para '//-> f) salir del lavadero'

//ahora bien, lo fantástico de este tipo de estructuras es más visible cuando se combina con 'for of loop', ya que nos permite iterar sobre cualquier estructura de código que querramos, no solamente sobre arrays y objetos. Por ejemplo:
function* colors() {
    yield 'red';
    yield 'blue';
    yield 'green';
};

const myColors = [];
for (let color of colors()) {
    myColors.push(color);
}
console.log(myColors)//el resultado será ['red', 'blue', 'green'] pero a su vez va a haber ejecutado todo el código dentro de colors() entre los 'yield' y todo el código dentro del 'for of loop'

//también puede utilizarse para iterar ciertas propiedades de un objetos, sin tener que iterar sobre todas. Por ejemplo:
const museumTeam = {
    size: 50,
    department: 'Museum',
    director: 'Victor Fernández',
    curator: 'Sabrina Díaz',
    reastaurator: 'Julio Tellechea'
};

function* TeamIterator(team) {
    yield team.director
    yield team.curator
    yield team.reastaurator
};

const names = [];
for (let name of TeamIterator(museumTeam)) {
    names.push(name);
};
console.log(names)//dará por resultado "['Victor Fernández', 'Sabrina Díaz', 'Julio Tellechea']"

//'Delegation of Generators' permite traer del pasos de un 'generator' en otro de tal modo que solamente hagamos una iteración y obtengamos un solo resultado, con la ventaja de poder reutilizar cada 'generator' por separado en otra parte de nuestro código. Por ejemplo:
const bestBuenosAiresTeams = {
    sinZona: 'Boca Juniors',
    zonaSur: 'Independiente',
    zonaCentro: 'River Plate',
    zonaNorte: 'Tigre'
};

const bestCordobaTeams = {
    sinZona: 'Jarillas',
    zonaSur: 'Instituto',
    zonaCentro: 'Belgrano',
    zonaNorte: 'Talleres'
};

function* BuenosAiresTeamIterator(team) {
    yield team.zonaSur;
    yield team.zonaCentro;
    yield team.zonaNorte;
    const cordobaTeamGenerator = CordobaTeamIterator(bestCordobaTeams);//pedimos que itere también la 'const bestCordobaTeams'...
    yield* cordobaTeamGenerator;//... y que con esa iteración traiga sus propias 'yield'
}

function* CordobaTeamIterator(team) {
    yield team.zonaSur;
    yield team.zonaCentro;
    yield team.zonaNorte;
}

const names = [];
for (let team of BuenosAiresTeamIterator(bestBuenosAiresTeams)) {
    names.push(team);
};
console.log(names)//dará por resultado "['Independiente', 'River Plate', 'Tigre', 'Instituto', 'Belgrano', 'Talleres']"

//ES6 establece una manera nueva de simplificar la 'Delegation of Generators', a través de '[Symbol.iterator]' que es una forma de llamar a llamar a la 'Generators Function' desde el mismo objeto, agregando una nueva clave/valor, donde la clave será '[Symbol.iterator]' y el valor será nuestra 'Generators Function'.
//por ejemplo:

const bestSantaFeTeams = {
    sinZona: 'Sarmiento',
    zonaSur: 'Independiente',
    zonaCentro: 'River Plate',
    zonaNorte: 'Tigre',
    [Symbol.iterator]: function* () {
        yield this.zonaSur;
        yield this.zonaCentro;
        yield this.zonaNorte;
        yield* bestLaPampaTeams;
    }
};

const bestLaPampaTeams = {
    sinZona: 'Alvear',
    zonaSur: 'Instituto',
    zonaCentro: 'Belgrano',
    zonaNorte: 'Talleres',
    [Symbol.iterator]: function* () {
        yield this.zonaSur;
        yield this.zonaCentro;
        yield this.zonaNorte;
    }
};

const names = [];
for (let team of bestSantaFeTeams) {
    names.push(team);
};
console.log(names)//dará por resultado "['Independiente', 'River Plate', 'Tigre', 'Instituto', 'Belgrano', 'Talleres']"
