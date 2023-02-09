import {Component} from '@angular/core';
import {ManageComponent} from "../../../../shared/manage.component";
import {UsersModel} from "../../models/users.model";
import {UserService} from "../../services/user.service";
import {NgForm} from "@angular/forms";

@Component({
    selector: 'app-user-manage',
    templateUrl: './user-manage.component.html',
    styleUrls: ['./user-manage.component.scss']
})
export class UserManageComponent extends ManageComponent<UsersModel> {

    constructor(public userService: UserService) {
        super(userService, UsersModel);

    }

    onValidateUserInfo(form: NgForm) {

    }


}
