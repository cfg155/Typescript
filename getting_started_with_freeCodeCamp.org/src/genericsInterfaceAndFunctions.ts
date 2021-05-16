// this is called generic functions to identify that this is an object by using <T> actually you can create any generic names you want, it captures all information, but the problem is that, it will allow any type so we need to use extends object in <> or you can custom it like below. 

// const addId = <type extends {name:number}>(obj: type) => {
const addId = <T extends object>(obj: T) => {
    const id = Math.random().toString(16)
    return {
        ...obj,
        id,
    }
}

interface UserInterface123<Y>{
    name: string
    data?: Y
}

const user123: UserInterface123<{meta: string}> = {
    name : "jake",
    data: {
        meta:'foo'
    }
}

const user10: UserInterface123<string[]> = {
    name:"john",
    data:['lll','llll']
}

const user5451: UserInterface123<null> = {
    name : 'joke'
}

const result = addId({name:'jake'})
console.log(result.id)

