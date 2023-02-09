import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AssessmentsComponent} from './assessments/assessments.component';
import {AssessmentsRoutingModule} from "./assessments-routing.module";


@NgModule({
    declarations: [
        AssessmentsComponent
    ],
    imports: [
        CommonModule,
        AssessmentsRoutingModule
    ]
})
export class AssessmentsModule {
}
