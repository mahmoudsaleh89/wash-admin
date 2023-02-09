import {Component, OnInit} from '@angular/core';
import {ChartType} from "ng-apexcharts";
import {BaseComponent} from "../../shared/base.component";
import {AuthService} from "../../core/services/auth.service";
import {environment} from "../../../environments/environment";
@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

/**
 *  Dashboard Component
 */
export class DashboardComponent extends BaseComponent implements OnInit {
    env = environment;


    constructor(public authService: AuthService) {
        super();
    }

    ngOnInit(): void {
        super.ngOnInit();
    }

}
