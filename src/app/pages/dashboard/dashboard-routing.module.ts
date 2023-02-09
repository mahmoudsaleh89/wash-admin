import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DashboardComponent} from "./dashboard.component";
import {TranslateService} from "@ngx-translate/core";
import {LocatorService} from "../../core/services/locator.service";
const translate : TranslateService =  LocatorService.injector.get(TranslateService)
const routes: Routes = [
    {
        path: '',
        component: DashboardComponent,
        title: translate.instant("Dashboard")
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule {
}
