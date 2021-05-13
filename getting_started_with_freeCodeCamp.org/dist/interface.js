var user = {
    name: "louis",
    age: 21
};
// this uses interface object
var user2 = {
    name: "louis",
    age: 21,
    getMssg: function () {
        return "hello " + name;
    }
};
var user3 = {
    name: 'Jack'
};
// In typescript every defined variable must be filled except using interface and add "?" after the variables
console.log(user.name);
