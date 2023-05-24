// Una forma de utilizar el metodo split() es a traves de una expresion regular. 
// En este caso /\W/ machea con cualquier caracter que no sea una palabra, incluyendo espacios y signos de puntuacion
// pero no incluyendo underscores. Equivale a /[^A-Za-z0-9_]/

function splitify(str) {
  return str.split(/\W/)
}

splitify("Hello World,I-am Matias");

// Tambien se puede llegar al mismo resultado utilizando una variable que encierre a la expresion regular

const myRegEx = new RegExp(/\W/)

function splitifyAgain(str) {
  return str.split(myRegEx)
}

splitifyAgain("Hello World,I-am Matias");
