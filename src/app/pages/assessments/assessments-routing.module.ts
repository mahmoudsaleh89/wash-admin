import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TranslateService} from "@ngx-translate/core";
import {LocatorService} from "../../core/services/locator.service";
import {AssessmentsComponent} from "./assessments/assessments.component";

const translate : TranslateService =  LocatorService.injector.get(TranslateService)

const routes: Routes = [

    {
        path: 'list',
        component: AssessmentsComponent,
        title: translate.instant("ASSESSMENTS")
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
export class AssessmentsRoutingModule {
}
