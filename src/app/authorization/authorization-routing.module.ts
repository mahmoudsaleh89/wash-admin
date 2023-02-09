import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {SigninComponent} from "./signin/signin.component";

const routes: Routes = [
    {
        path: 'sign-in',
        component: SigninComponent
    },
    {
        path: '**',
        redirectTo: 'sign-in',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthorizationRoutingModule {
}
