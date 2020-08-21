// +*+*+*+*+*+ filter helper +*+*+*+*+*+
// el método filter nos permite filtrar valores de un array asignándolos a un nuevo array
//si usaramos 'for', el código sería así:
var products = [
    { name: 'cucumber', type: 'vegetable'},
    { name: 'banana', type: 'fruit'},
    { name: 'celery', type: 'vegetable'},
    { name: 'orange', type: 'fruit'}
];
var filteredProducts = [];
for (var i = 0; i < products.length; i ++) {
    if (products[i].type === 'fruit') {
        filteredProducts.push(products[i]);
    }
};
console.log(filteredProducts);
//con el método 'filter' se logra un código más limpio como elque sigue:
var products = [
    { name: 'cucumber', type: 'vegetable', quantity: 0, price: 5},
    { name: 'banana', type: 'fruit', quantity: 1, price: 10},
    { name: 'celery', type: 'vegetable', quantity: 2, price: 15},
    { name: 'orange', type: 'fruit', quantity: 3, price: 20}
];
var filteredFruitProducts = products.filter(function(product) {
    return product.type === 'fruit';
});
console.log(filteredFruitProducts);
//también podemos utilizar múltiples parámetros para filtrar
var multiFilteredProducts = products.filter(function(product) {
    return product.type === 'fruit'
    && product.quantity > 1
    && product.price < 10;
});
console.log(multiFilteredProducts);
//un buen ejemplo de como usar el étodo 'filter' con un array de post y otro de comments
var post = { id:4, title: 'This is a new post'};
var coomments = [
    {postId: 4, content: 'Great!'},
    {postId: 2, content: 'Show the stuff'},
    {postId: 4, content: 'Let me know'},
    {postId: 3, content: 'Yes, of course!'},
    {postId: 1, content: 'No thanks'}
];
function commentsForPost(post, comments) {
    return comments.filter(function(comment) {
        return comment.postId === post.id;
    });
};