import {Injectable} from '@angular/core';
import {ServiceBase} from "../../../shared/services/base.service";
import {UsersModel} from "../../users/models/users.model";
import {UsersFilterModel} from "../../users/models/users-filter.model";
import {ApiHelperService} from "../../../shared/services/api-helper.service";

@Injectable({
    providedIn: 'root'
})
export class AssessmentsService extends ServiceBase<UsersModel, UsersFilterModel> {

    constructor(protected apiHelper: ApiHelperService) {
        super(apiHelper, 'assessments');
    }
}
