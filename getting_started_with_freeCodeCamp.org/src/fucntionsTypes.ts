function sumGenerator(input1:number,input2:number){
    return input1 + input2
}

let test:(a:number,b:number) => number

test = sumGenerator
console.log(test(1,3))

function sumGenerator2(input1:number,input2:number,callback:(num:number) => void){
    const result = input1 + input2
    callback(result)
}

let test2:(a:number,b:number,c:(y:number)=>void) => void

test2 = sumGenerator2

test2(1,4,(lala)=>{
    console.log(lala)
})