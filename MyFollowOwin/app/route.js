"use strict";
var router_1 = require('@angular/router');
var enduser_component_1 = require('./EndUser/enduser.component');
var routes = [{
        path: "Users/owner",
        component: enduser_component_1.OwnerComponent,
    }];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=route.js.map