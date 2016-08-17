import { provideRouter, RouterConfig }  from '@angular/router';
import { OwnerComponent }from './EndUser/enduser.component';
const routes: RouterConfig = [{
    path: "Users/owner",
    component: OwnerComponent,

}];


export const appRouterProviders = [
    provideRouter(routes)
];