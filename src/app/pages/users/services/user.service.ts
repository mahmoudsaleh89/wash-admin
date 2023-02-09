import {Injectable} from '@angular/core';
import {User} from "../../../core/models/auth.models";
import {ServiceBase} from "../../../shared/services/base.service";
import {UsersModel} from "../models/users.model";
import {UsersFilterModel} from "../models/users-filter.model";
import {ApiHelperService} from "../../../shared/services/api-helper.service";
import {Observable} from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class UserService extends ServiceBase<UsersModel, UsersFilterModel> {

    constructor(protected apiHelper: ApiHelperService) {
        super(apiHelper, 'user');
    }
}
