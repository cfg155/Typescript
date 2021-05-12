// Variables in Typescript
let hello: string = "world"

// you cannot use this variable with another data type value
// hello = true || this is wrong

// Functions
const getFullName = (name: string, surname: string): string => {
    return name + " " + surname
}

console.log(getFullName('Moster','Lessons')) 