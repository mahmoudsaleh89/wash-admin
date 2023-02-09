import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SharedModule} from "../../shared/shared.module";
import {ResponsiveTableModule} from "../../shared/responsive-table/responsive-table.module";
import {
    NgbAccordion, NgbNav, NgbNavContent, NgbNavItem, NgbNavLink,
    NgbNavOutlet,
    NgbPanel,
    NgbPanelContent,
    NgbPanelTitle,
    NgbTooltip
} from "@ng-bootstrap/ng-bootstrap";
import {TranslateModule} from "@ngx-translate/core";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";
import {SurveyManageComponent} from './surveys/survey-manage/survey-manage.component';
import {FlatpickrModule} from "angularx-flatpickr";
import {AppValidatorModule} from "../../core/app-validator/app-validator.module";
import {NgxMaskModule} from "ngx-mask";
import {SurveysComponent} from "./surveys/surveys.component";
import {SurveysRoutingModule} from "./surveys-routing.module";




@NgModule({
    declarations: [
        SurveysComponent,
        SurveyManageComponent
    ],
    imports: [
        CommonModule,
        SurveysRoutingModule,
        SharedModule,
        ResponsiveTableModule,
        NgbAccordion,
        TranslateModule,
        NgbPanel,
        NgbTooltip,
        NgbPanelTitle,
        NgbPanelContent,
        NgSelectModule,
        FormsModule,
        NgbNavOutlet,
        NgbNav,
        NgbNavLink,
        NgxMaskModule.forRoot(),
        NgbNavItem,
        NgbNavContent,
        FlatpickrModule.forRoot(),
        AppValidatorModule
    ]
})
export class SurveysModule {
}
