//supongamos que tenemos un listado de comentarios a distintos posts. Cada comentario puede a su vez tener comentarios, por lo que puede haber comentarios de comentarios, y así sucesivamente, creando un árbol de comentarios.
//para poder iterar todos los comentarios se debe utilizar un 'generator' recursivamente, que se haría de esta manera:

//generamos nuestra class con la que construiremos un comentario, que por definición tenga un contenido y posibles comentarios a sí mismo
class Comment {
    constructor(content, children) {
        this.content = content;
        this. children = children;
    }

    //generamla iteración dentro de las 'class constructor' en la que pediremos que itere por cada comentario su contenido y además sus 'comentarios hijos'. Debemos usar el 'for of loop' porque dentro de una 'class constructor' no son válidos los métodos map() ni forEach() 
    *[Symbol.iterator]() {
        yield this.content;
        for (let child of this.children) {
            yield* child;
        }

    }
}

//creamos el array de 'comentarios hijos'
const children = [
    new Comment('Hola, soy un comentario', []),
    new Comment('Yo soy otro comentario', []),
    new Comment('A mí me tocó el tercer puesto', [])
];

//creamos el 'comentario padre'
const tree = new Comment('Soy el padre de los comentarios', children)

console.log(tree);