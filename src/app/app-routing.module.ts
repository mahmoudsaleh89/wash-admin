import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layouts/layout.component';
import {AuthGuard} from './core/guards/auth.guard';
import {UserType} from "./core/enums/user-type";

const routes: Routes = [
    {
        path: 'admin',
        component: LayoutComponent,
        loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule),
       // canActivate: [AuthGuard]
    },
    {
        path: 'authorization',
        loadChildren: () => import('./authorization/authorization.module').then(m => m.AuthorizationModule)
    },
    {
        path: '',
        redirectTo: 'authorization',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'top'})],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
