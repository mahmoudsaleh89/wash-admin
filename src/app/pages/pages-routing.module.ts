import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UserType} from "../core/enums/user-type";
import {AuthGuard} from "../core/guards/auth.guard";

const routes: Routes = [
    {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
        canActivate: [AuthGuard],
        data: {
            role: UserType.SuperAdmin
        }

    },
    {
        path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule),
        canActivate: [AuthGuard],
        data: {
            role: UserType.SuperAdmin
        }
    },
    {
        path: 'surveys', loadChildren: () => import('./surveys/surveys.module').then(m => m.SurveysModule),
        canActivate: [AuthGuard],
        data: {
            role: UserType.SuperAdmin
        }
    },
    {
        path: 'assessments', loadChildren: () => import('./assessments/assessments.module').then(m => m.AssessmentsModule),
        canActivate: [AuthGuard],
        data: {
            role: UserType.SuperAdmin
        }
    },
    {
        path: 'domains', loadChildren: () => import('./domains/domains.module').then(m => m.DomainsModule),
        canActivate: [AuthGuard],
        data: {
            role: UserType.SuperAdmin
        }
    },
    {
        path: '',
        redirectTo: 'admin/dashboard',
        pathMatch: 'full'
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {
}
