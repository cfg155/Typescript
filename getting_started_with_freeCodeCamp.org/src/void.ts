const doSomething = (): void => {
    console.log('do something')
    // if a function is not returning something it means void, wether you define the data type of void or not, use void that means the return is null or undefined
}

let foo: any = 'foo'
// means accepting any kind of data type

let foo2: unknown = 'foo2'
// it accepts any kinds of data types but cannot be assigned like the example below

// let testing1: string = foo
// let testing2: string = foo2

// Type assertion
let pageNumber: unknown = '1'
let numerical: number = pageNumber as number

// converting from other type than unknown, you have to convert it to unknown first then to another type of data
let pageNumber2: string = '1'
let numerical2: number = (pageNumber2 as unknown) as number
