import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {TranslateService} from "@ngx-translate/core";
import {LocatorService} from "../../core/services/locator.service";
import {SurveysComponent} from "./surveys/surveys.component";
import {SurveyManageComponent} from "./surveys/survey-manage/survey-manage.component";
const translate : TranslateService =  LocatorService.injector.get(TranslateService)

const routes: Routes = [

    {
        path: 'list',
        component: SurveysComponent,
        title: translate.instant("SURVEYS")
    },
    {
        path: 'manage',
        component: SurveyManageComponent,
        title: translate.instant("SURVEYS")
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
export class SurveysRoutingModule {
}
