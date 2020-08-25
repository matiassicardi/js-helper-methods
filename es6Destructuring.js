//Supongamos que tenemos una variabloe que contiene un objeto
let expenses = {
    type: 'grossery',
    amount: 45
}
//podemos extraer los valores incluídos en el objeto a traves de ES6 Destructuring
//creamos dos nuevas constantes con los nombres exactos de las 'keys', y le declaramos que queremos que salgan sus valores de los 'values' que están en el objeto 
const { type, amount } = expenses;
//la línea de código significa "creamos dos variables con esos nombres, y estraemos sus valores, tomados de la variable expenses"

//'destructuring' también nos permite llevar valores que están en una variable a una función, y sumarle otros de otro origen
//por ejemplo:
let savedFile = {
    name: 'picture',
    extension: 'jpg',
    size: 14040
};

let dimention = {
    height: 100,
    width: 300
};

function fileSummary({name, extension, size}, {height, width}, {primaryColor}) {
    return `The file ${name}.${extension} is of size ${size} with ${height}px height and ${width}px width. It's primary color is ${primaryColor}`
};

fileSummary(savedFile, dimention, {primaryColor : 'red'})

//'destructuring' también nos permite extraer datos de un array de una manera más simple. Por ejemplo, si tenemos el siguiente array de nombres:
const names = [
    'John',
    'Peter',
    'Laura',
    'Maria',
    'Julius'
];
//Al aplicar 'destructuring' al array, podemos crear variables que contengas como valor el mismo valor en orden que están el array.
//el siguinte código nos creará seis variables que contendrán los valores en orden del array, quedando la sexta variable con valor 'undefined' porque en el array de origen no existe un sexto valor
const [ name1, name2, name3, name4, name5, name6 ] = names;

//es importante tener en cuenta que al aplicar 'destructuring' se deben utilizar "[]" para acceder a los objetos y "{}" para acceder a las propiedades 
const [ length ] = names;//dará como resultado 'undefined' ya que no hay un objeto con ese nombre
const { length } = names;//dará como resultado '5' ya que la propiedad 'length' nos permite conocer el largo de un array

//también se puede utilizar 'destructuring' accediendo a objetos y propiedades al mismo tiempo.
//por ejemplo, dado el array de objetos:
const companies = [
    { name: 'Google', location: 'Montain View' },
    { name: 'Facebook', location: 'Menlo Park' },
    { name: 'Uber', location: 'San Francisco Down Town' }
];
//accedemos al primer elemento, y luego al valor de su propiedad 'location' de la siguiente manera:
const [{ location }] = companies;

//podríamos a su vez querer buscar un elemento que está en un array que es el valor de una propiedad en un objeto, y lo haríamos de la siguiente manera:
const Google = {
    locations: ['Montain View', 'New York', 'London']
};
//con el siguiente código le pedimos que 1) encuentre dentro del objeto 'Google' la propiedad 'locations', y 2) dentro de ella, que nos traiga el primer valor de array
const { locations: [location] } = Google;

//otro modo de aplicar 'destructuring' para acceder a valores es haciendo un mix con el 'spread oprator'. Por ejemplo:
const autos = [
    'Ford',
    'Renault',
    'Citroen',
    'Chevrolet',
    'Toyota'
];
const [ auto1, auto2, ...rest ] = autos;
auto1;//traerá 'Ford'
auto2;//traerá 'Renault'
rest;//traerá un array con el resto de las marcas '['Citroen', 'Chevrolet', 'Toyota']'

//una enorme ventaja de aplicar 'destructuring' como argumento de funciones es que deja de ser necesario respetar el orden de los argumentos
//por ejemplo, si tuvieramos una const en donde guardamos los datos del usuario:
const user = {
    username: 'myname',
    password: 'mypass',
    email: 'myemail@example.com',
    dateOfBirth: '10/09/1975',
    city: 'Buenos Aires'
};
//si quisieramos pasar estos valores como argumentos de una función (por ejemplo logIn()) aplicar 'destructuring' no hace falta que respeten un orden específico
function logIn({ email, city, username, dateOfBirth, password}) {
    //user log in function
};

//aplicando 'destructuring' también podemos un array de array en un array de objetos.
//por ejemplo, si tuvieramos un array de array que trae las coordenadas "x" e "y" en las cuales se posiciona un objeto
const points = [
    [4, 5],
    [10, 1],
    [0, 40]
];
//y necesitáramos (porque alguna librería así lo pide) transfromarlo en un array de objetos donde estén las claves "x" e "y", el código sería
points.map(([ x, y ]) => {
    return {x, y};//aplicando la sintaxix de object literals podemos solamente dejar "x" en vez de "x:x" 
});