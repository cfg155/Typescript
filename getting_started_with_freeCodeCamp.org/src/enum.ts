enum Role {ADMIN = 5, READ_ONLY = 'READ ONLY', AUTHOR = 2}

interface RoleInteface {
    name: string
    role: Role
}

const user1236: RoleInteface = {
    name : "abc",
    role : Role.ADMIN
}

const user454: RoleInteface = {
    name : "def",
    role : Role.AUTHOR
}

const user13215: RoleInteface = {
    name : "ghi",
    role : Role.READ_ONLY
}

const allUsers = [user1236,user454,user13215]
allUsers.forEach(user => {
    if(user.role === Role.ADMIN){
        console.log(`Name : ${user.name}`)
        console.log(`Name : ${user.role}`)
    }else if(user.role === Role.AUTHOR){
        console.log(`Name : ${user.name}`)
        console.log(`Name : ${user.role}`)
    }else if(user.role === Role.READ_ONLY){
        console.log(`Name : ${user.name}`)
        console.log(`Name : ${user.role}`)
    }
})