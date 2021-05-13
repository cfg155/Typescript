interface UserInterface3 {
    getFullName(): string
}

class User100 implements UserInterface3 {
    private firstName: string
    private lastName: string
    // This makes the variable cannot be changed or read only, and be set in constructor
    readonly unchangeableName: string 
    // Static is the property that can't be accessed through instances but with the classes itself
    static readonly maxAge = 21

    constructor(firstName:string,lastName:string){
        this.firstName = firstName
        this.lastName = lastName
        this.unchangeableName = firstName
    }

    getFullName(): string {
        return this.firstName+' '+this.lastName
    }

    // a readonly attribute can't be set and only be read
    // changeUnchangeAbleName(): void{
    //     this.unchangeableName = 'foo'
    // }
};

class Admin extends User100{
    private editor: string

    constructor(firstName:string,lastName:string,editor: string){
        super(firstName,lastName)
        this.editor = editor
    }

    setEditor(editor: string){
        this.editor = editor
    }

    getEditor(): string{
        return this.editor
    }
}

const myUser = new User100('Louis','Leonardo')
console.log(myUser.getFullName)
console.log(User100.maxAge) //this is a static property

const admin = new Admin('Foo','Bar','lewis')