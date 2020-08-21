// +*+*+*+*+*+ find helper +*+*+*+*+*+
//el método 'find' nos permite recorrer un array y encontrar un elemento particular dentro del mismo
//supongamos que tenemos un listado de usuarios, y queremos encontrar uno con un nombre en particular
//utilizando el método 'for' el código sería de esta manera
var users = [
    {name:'Jill'},
    {name:'Alex'},
    {name:'Bill'}
];
var user;
for (var i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break;//esto permite cortar el loop una vez hallado el elemento
    };
};
console.log(user);
//usando el método 'find' el código quedaría así:
var users = [
    {name:'Jill'},
    {name:'Alex'},
    {name:'Bill'}
];
var userFound = users.find(function(user) {
    return user.name === 'Alex';
});
console.log(userFound);
//otra variante del uso del método 'find' usando de ejemplo post y comments
var blogPosts = [
    {id:1, title: 'New post'},
    {id:2, title: 'Old post'}
];
var blogComment = {postId: 1, content: 'Great job!'};
var findingPostComment = function postForComment(blogPosts, blogComment) {
    return blogComment.find(function(blogPost) {
        return blogPost.id === blogComment.postId;
    });
};
console.log(findingPostComment);