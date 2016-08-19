"use strict";
(function (Platform) {
    Platform[Platform["Mobile"] = 0] = "Mobile";
    Platform[Platform["IOT"] = 1] = "IOT";
    Platform[Platform["Web"] = 2] = "Web";
})(exports.Platform || (exports.Platform = {}));
var Platform = exports.Platform;
var Product = (function () {
    function Product() {
    }
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map