import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {BaseComponent} from "./shared/base.component";


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
    title = 'Wash-HCF';

    constructor() {
        super();


    }

    ngOnInit() {
        super.ngOnInit();
    }

}
