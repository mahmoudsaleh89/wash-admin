import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TranslateService} from "@ngx-translate/core";
import {LocatorService} from "../../core/services/locator.service";
import {DomainsComponent} from "./domains/domains.component";
const translate : TranslateService =  LocatorService.injector.get(TranslateService)

const routes: Routes = [

    {
        path: 'list',
        component: DomainsComponent,
        title: translate.instant("DOMAINS")
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
export class DomainsRoutingModule {
}
