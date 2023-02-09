import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PagetitleComponent} from './pagetitle/pagetitle.component';
import {BaseComponent} from "./base.component";
import {HttpClientModule} from "@angular/common/http";
import {SpinnerModule} from "./spinner/spinner.module";
import {FormsModule} from "@angular/forms";
import {NgbModule, NgbNavModule, NgbPopoverModule, NgbTooltipModule} from "@ng-bootstrap/ng-bootstrap";

import {ApiHelperService} from "./services/api-helper.service";
import {AppValidatorModule} from "../core/app-validator/app-validator.module";
import {TimerComponent} from "./timer/timer.component";
import {TranslateModule} from "@ngx-translate/core";



@NgModule({
    declarations: [
        BaseComponent,
        TimerComponent,
        PagetitleComponent,
    ],
    imports: [
        CommonModule,
        SpinnerModule,
        FormsModule,
        HttpClientModule,
        NgbModule,
        NgbTooltipModule,
        NgbPopoverModule,
        NgbNavModule,
        AppValidatorModule,
        TranslateModule,
    ],
    exports: [PagetitleComponent, TimerComponent],
    providers: [
        ApiHelperService,
    ]
})
export class SharedModule {
}
