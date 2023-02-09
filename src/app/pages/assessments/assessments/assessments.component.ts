import {Component} from '@angular/core';
import {ListComponent} from "../../../shared/list.component";
import {Router} from "@angular/router";
import {AssessmentsModel} from "../models/assessments.model";
import {AssessmentsFilterModel} from "../models/assessments-filter.model";
import {AssessmentsService} from "../services/assessments.service";

@Component({
    selector: 'app-assessments',
    templateUrl: './assessments.component.html',
    styleUrls: ['./assessments.component.scss']
})
export class AssessmentsComponent extends ListComponent<AssessmentsModel, AssessmentsFilterModel> {
    constructor(public assessmentsService: AssessmentsService,
                public router: Router) {
        super(assessmentsService, AssessmentsFilterModel);
    }
}
