var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var buttonElement = document.querySelector('button');
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin(name, age, permissions) {
        var _this = _super.call(this, name, age) || this;
        _this.permissions = permissions;
        return _this;
    }
    return Admin;
}(User));
// or better
var OutputMode;
(function (OutputMode) {
    OutputMode[OutputMode["CONSOLE"] = 0] = "CONSOLE";
    OutputMode[OutputMode["ALERT"] = 1] = "ALERT";
})(OutputMode || (OutputMode = {}));
;
function add(a, b) {
    return a + b;
}
function print(result, mode) {
    if (mode === void 0) { mode = OutputMode.CONSOLE; }
    if (mode === OutputMode.CONSOLE) {
        console.log(result);
    }
    else {
        alert(result);
    }
}
buttonElement.addEventListener('click', function () {
    var num1Value = +num1.value;
    var num2Value = +num2.value;
    var result = add(num1Value, num2Value);
    print(result);
});
