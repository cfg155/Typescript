function sumGenerator(input1, input2) {
    return input1 + input2;
}
var test;
test = sumGenerator;
console.log(test(1, 3));
function sumGenerator2(input1, input2, callback) {
    var result = input1 + input2;
    callback(result);
}
var test2;
test2 = sumGenerator2;
test2(1, 4, function (lala) {
    console.log(lala);
});
