var doSomething = function () {
    console.log('do something');
    // if a function is not returning something it means void, wether you define the data type of void or not, use void that means the return is null or undefined
};
var foo = 'foo';
// means accepting any kind of data type
var foo2 = 'foo2';
// it accepts any kinds of data types but cannot be assigned like the example below
// let testing1: string = foo
// let testing2: string = foo2
// Type assertion
var pageNumber = '1';
var numerical = pageNumber;
// converting from other type than unknown, you have to convert it to unknown first then to another type of data
var pageNumber2 = '1';
var numerical2 = pageNumber2;
