// +*+*+*+*+*+ find helper +*+*+*+*+*+
//el método 'find' nos permite recorrer un array y encontrar un elemento particular dentro del mismo
//supongamos que tenemos un listado de usuarios, y queremos encontrar uno con un nombre en particular
//utilizando el método 'for' el código sería de esta manera
let users = [
    {name:'Jill'},
    {name:'Alex'},
    {name:'Bill'}
];
let user;
for (let i = 0; i < users.length; i++) {
    if (users[i].name === 'Alex') {
        user = users[i];
        break;//esto permite cortar el loop una vez hallado el elemento
    };
};
console.log(user);
//usando el método 'find' el código quedaría así:
let users = [
    {name:'Jill'},
    {name:'Alex'},
    {name:'Bill'}
];
const userFound = users.find(function(user) {
    return user.name === 'Alex';
});
console.log(userFound);
//otra variante del uso del método 'find' usando de ejemplo post y comments
let blogPosts = [
    {id:1, title: 'New post'},
    {id:2, title: 'Old post'}
];
let blogComment = {postId: 1, content: 'Great job!'};
const findingPostComment = function postForComment(blogPosts, blogComment) {
    return blogComment.find(function(blogPost) {
        return blogPost.id === blogComment.postId;
    });
};
console.log(findingPostComment);