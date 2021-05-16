var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function identity(arg) {
    return arg;
}
console.log(identity('testing'));
function displayNumber(arg) {
    return arg;
}
console.log(displayNumber(2));
var myAdmin = {
    name: "louis",
    age: 21,
    editable: true,
    tags: ['lalal', 'kankjdn']
};
var addId2 = function (obj) {
    var idNumber = Math.random();
    return __assign({ idNumber: idNumber }, obj);
};
console.log(addId2(myAdmin));
