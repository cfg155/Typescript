const person: {
    name:string,
    role:[string,string] //this is called tuples because you only can create 2 strings and cannot push it, but it still can be edited
} = {
    name:"louis",
    role:["developer","front end"]
}

person.role[0] = "lalal"

console.log(person)