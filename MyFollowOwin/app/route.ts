import { provideRouter, RouterConfig }  from '@angular/router';
import { OwnerComponent }from './Owner/owner.component';
const routes: RouterConfig = [{
    path: "Users/owner",
    component: OwnerComponent,

}];


export const appRouterProviders = [
    provideRouter(routes)
];