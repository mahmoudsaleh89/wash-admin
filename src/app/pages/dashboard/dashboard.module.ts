import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DashboardComponent} from "./dashboard.component";
import {DashboardRoutingModule} from "./dashboard-routing.module";
import {SharedModule} from "../../shared/shared.module";
import {NgbCarousel, NgbNav, NgbNavContent, NgbNavItem, NgbNavLink, NgbNavOutlet} from "@ng-bootstrap/ng-bootstrap";
import {TranslateModule} from "@ngx-translate/core";
import {NgApexchartsModule} from "ng-apexcharts";
import {NgSelectModule} from "@ng-select/ng-select";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
   DashboardComponent
  ],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        SharedModule,
        NgbNavItem,
        NgbNavLink,
        NgbNavContent,
        NgbNavOutlet,
        NgbNav,
        TranslateModule,
        NgApexchartsModule,
        NgSelectModule,
        FormsModule,
        NgbCarousel
    ]
})
export class DashboardModule { }
