// TypeScript introduced a new type never, which indicates the values that will never occur.
// The never type is used when you are sure that something is never going to occur. For example, you write a function which will not return to its end point or always throws an exception.

function generateErr(message:string,code:number):unknown {
    throw {message: message,code: code}
}

generateErr('error occured!',500)