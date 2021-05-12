interface UserInterface {
    name: string,
    age?: number,
    getMssg?(): string
}

const user: {name:string,age:number} = {
    name : "louis",
    age : 21
}

// this uses interface object
const user2: UserInterface = {
    name : "louis",
    age : 21,
    getMssg(){
        return "hello " + name
    }
}

const user3: UserInterface = {
    name : 'Jack'
}
// In typescript every defined variable must be filled except using interface and add "?" after the variables

console.log(user.name)