import {Injectable} from '@angular/core';
import {ServiceBase} from "../../shared/services/base.service";
import {ResetPasswordDTO, User} from "../models/auth.models";
import {UsersFilterModel} from "../../pages/users/models/users-filter.model";
import {authApiHelper} from "../../shared/api-helper/auth-api-helper";
import {ApiHelperService} from "../../shared/services/api-helper.service";
import {Observable} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class IdentityService extends ServiceBase<User, UsersFilterModel> {

    constructor(protected apiHelper: ApiHelperService,
                public router: Router) {
        super(apiHelper, authApiHelper.token)
    }

    login(params): Observable<any> {
        return null;
        // return this.apiHelper.postWithStringParams(this.apiUrl, {username: params.username, password: params.password});
    }

    logout() {
        // logout the user

        return new Promise((resolve) => {
            localStorage.removeItem('jwt');
            localStorage.removeItem('jwt');
            this.router.navigate(['/authorization/sign-in']);
            resolve(true)
        });
    }


    sendForgetPasswordEmail(email: string) {
        return this.apiHelper.post(this.apiUrl + '/SendForgetPasswordEmail', {email: email});
    }
}
