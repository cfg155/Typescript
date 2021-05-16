// this is called generic functions to identify that this is an object by using <T> actually you can create any generic names you want, it captures all information, but the problem is that, it will allow any type so we need to use extends object in <> or you can custom it like below. 
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
// const addId = <type extends {name:number}>(obj: type) => {
var addId = function (obj) {
    var id = Math.random().toString(16);
    return __assign(__assign({}, obj), { id: id });
};
var user123 = {
    name: "jake",
    data: {
        meta: 'foo'
    }
};
var user10 = {
    name: "john",
    data: ['lll', 'llll']
};
var user5451 = {
    name: 'joke'
};
var result = addId({ name: 'jake' });
console.log(result.id);
