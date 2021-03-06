var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User100 = /** @class */ (function () {
    function User100(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.unchangeableName = firstName;
    }
    User100.prototype.getFullName = function () {
        return this.firstName + ' ' + this.lastName;
    };
    // Static is the property that can't be accessed through instances but with the classes itself
    User100.maxAge = 21;
    return User100;
}());
;
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(firstName, lastName, editor) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.editor = editor;
        return _this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User100));
var myUser = new User100('Louis', 'Leonardo');
console.log(myUser.getFullName);
console.log(User100.maxAge); //this is a static property
var admin = new Admin('Foo', 'Bar', 'lewis');
