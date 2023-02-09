import {Injectable} from '@angular/core';
import {ServiceBase} from "../../../shared/services/base.service";
import {ApiHelperService} from "../../../shared/services/api-helper.service";
import {Observable} from "rxjs";
import {SurveysFilterModel} from "../models/surveys-filter.model";
import {SurveysModel} from "../models/surveys.model";

@Injectable({
    providedIn: 'root'
})
export class SurveysService extends ServiceBase<SurveysModel, SurveysFilterModel> {

    constructor(protected apiHelper: ApiHelperService) {
        super(apiHelper, 'surveys');
    }



}
