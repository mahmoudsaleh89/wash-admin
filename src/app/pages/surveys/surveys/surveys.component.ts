import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ListComponent} from "../../../shared/list.component";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderTypes} from "../../../shared/responsive-table/enums";
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";
import { SurveysModel } from '../models/surveys.model';
import {SurveysFilterModel} from "../models/surveys-filter.model";
import {SurveysService} from "../services/surveys.service";


@Component({
    selector: 'app-surveys',
    templateUrl: './surveys.component.html',
    styleUrls: ['./surveys.component.scss']
})
export class SurveysComponent extends ListComponent<SurveysModel, SurveysFilterModel> {
    constructor(public surveysService: SurveysService,
                public router: Router) {
        super(surveysService, SurveysFilterModel);
    }

}
