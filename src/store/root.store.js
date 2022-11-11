"use strict";
exports.__esModule = true;
var typedi_1 = require("typedi");
var RootStore = /** @class */ (function () {
    function RootStore() {
        this.loginViewModel = typedi_1.Container.get('ILoginViewModel');
    }
    return RootStore;
}());
exports["default"] = RootStore;
