function identity<T>(arg:T):T{
    return arg
}

console.log(identity<string>('testing'))
// the <string> will define all the T to be string, jadi intinya ini kyk buat template nah nanti tinggal dikasi tau kalo genericnya itu harusnya apa

interface IdentityInterface<Y>{
    (arg:Y):Y
}

function displayNumber<IdentityInterface>(arg:IdentityInterface):IdentityInterface{
    return arg
}

console.log(displayNumber<number>(2))

// jadi logikanya adalah disini saya bikin template genericnya dulu dengan nama Y lalu isi genericnya ada arg

// object generic
interface AdminInterface<Z,M,C> {
    name: Z
    age: M
    editable: boolean
    tags: C
}

const myAdmin: AdminInterface<string, number, string[]> = {
    name: "louis",
    age: 21,
    editable: true,
    tags: ['lalal','kankjdn']
}

const addId2 = <AdminInterface extends object>(obj: AdminInterface):AdminInterface => {
    let idNumber: number = Math.random()
    return {
        idNumber,
        ...obj
    }
}

console.log(addId2(myAdmin))