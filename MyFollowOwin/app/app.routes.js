"use strict";
var router_1 = require('@angular/router');
var becomeOwner_component_1 = require('./EndUser/becomeOwner.component');
var getproducts_component_1 = require('./EndUser/getproducts.component');
var addproducts_component_1 = require('./Owner/addproducts.component');
var addedproducts_component_1 = require('./Owner/addedproducts.component');
var products_component_1 = require('./Owner/products.component');
var routes = [
    {
        path: 'Login/EndUser/beowner',
        component: becomeOwner_component_1.BecomeOwnerComponent
    },
    {
        path: 'Login/EndUser',
        component: getproducts_component_1.GetProductsComponent
    },
    {
        path: 'Login/ProductOwner/addproduct',
        component: addproducts_component_1.AddProductComponent
    },
    {
        path: 'Login/ProductOwner/addedproduct',
        component: addedproducts_component_1.AddedProductComponent
    },
    {
        path: 'Login/ProductOwner',
        component: products_component_1.ProductsComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map