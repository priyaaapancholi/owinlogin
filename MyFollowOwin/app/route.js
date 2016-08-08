"use strict";
var router_1 = require('@angular/router');
var owner_component_1 = require('./Owner/owner.component');
var routes = [{
        path: "Users/owner",
        component: owner_component_1.OwnerComponent,
    }];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=route.js.map