import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {UsersComponent} from "./users/users.component";
import {UserManageComponent} from "./users/user-manage/user-manage.component";
import {TranslateService} from "@ngx-translate/core";
import {LocatorService} from "../../core/services/locator.service";
const translate : TranslateService =  LocatorService.injector.get(TranslateService)

const routes: Routes = [

    {
        path: 'list',
        component: UsersComponent,
        title: translate.instant("USERS")
    },
    {
        path: 'manage',
        component: UserManageComponent,
        title: translate.instant("USERS")
    },
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
    },
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UsersRoutingModule {
}
