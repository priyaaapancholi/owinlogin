"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var enduser_component_1 = require('./EndUser/enduser.component');
var admin_component_1 = require('./Admin/admin.component');
var owner_component_1 = require('./Owner/owner.component');
//import { appRouterProviders } from './route';
var http_1 = require('@angular/http');
platform_browser_dynamic_1.bootstrap(enduser_component_1.OwnerComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(admin_component_1.AdminComponent, [http_1.HTTP_PROVIDERS]);
platform_browser_dynamic_1.bootstrap(owner_component_1.OwnerLoginComponent, [http_1.HTTP_PROVIDERS]);
//# sourceMappingURL=main.js.map