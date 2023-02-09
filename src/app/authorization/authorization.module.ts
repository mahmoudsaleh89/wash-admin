import {NgModule} from '@angular/core';
import {
    NgbCarouselModule,
    NgbDropdown,
    NgbDropdownMenu,
    NgbDropdownToggle,
    NgbPopover,
    NgbTooltip
} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {AuthorizationRoutingModule} from './authorization-routing.module';
import {TranslateModule} from "@ngx-translate/core";
import {AppValidatorModule} from "../core/app-validator/app-validator.module";
import {SigninComponent} from './signin/signin.component';
import {ResponsiveTableModule} from "../shared/responsive-table/responsive-table.module";

@NgModule({
    declarations: [
        SigninComponent
    ],
    imports: [
        CommonModule,
        NgbCarouselModule,
        ReactiveFormsModule,
        FormsModule,
        AuthorizationRoutingModule,
        TranslateModule,
        AppValidatorModule,
        NgbPopover,
        NgbTooltip,
        ResponsiveTableModule,
        NgbDropdown,
        NgbDropdownToggle,
        NgbDropdownMenu
    ]
})
export class AuthorizationModule {
}
