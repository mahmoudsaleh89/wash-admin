import {Component} from '@angular/core';
import {ManageComponent} from "../../../../shared/manage.component";
import {NgForm} from "@angular/forms";
import {SurveysModel} from "../../models/surveys.model";
import {SurveysService} from "../../services/surveys.service";

@Component({
    selector: 'app-survey-manage',
    templateUrl: './survey-manage.component.html',
    styleUrls: ['./survey-manage.component.scss']
})
export class SurveyManageComponent extends ManageComponent<SurveysModel> {
    constructor(public surveysService: SurveysService) {
        super(surveysService, SurveysModel);

    }

}
