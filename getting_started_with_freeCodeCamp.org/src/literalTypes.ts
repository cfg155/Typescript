function sum(
    input1:number | string,
    input2:number | string,
    resultConversion: 'as-number' | 'as-text'
    ){
        let result: number | string;
        if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number'){
            result = (+input1) + (+input2)  // by using + before the variables it means it will become number typesresult = input1 + input2
        }else{
            result = input1.toString() + input2.toString()
        }

        return result
    }

console.log(sum(1,4,'as-text'))
