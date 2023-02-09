import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ListComponent} from "../../../shared/list.component";
import {UsersModel} from "../models/users.model";
import {UsersFilterModel} from "../models/users-filter.model";
import {UserService} from "../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HeaderTypes} from "../../../shared/responsive-table/enums";
import {NgbOffcanvas} from "@ng-bootstrap/ng-bootstrap";


@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent extends ListComponent<UsersModel, UsersFilterModel> {
    @ViewChild('detailsContent', {static: false}) detailsContent: TemplateRef<any>
    selectedUser: UsersModel = new UsersModel();

    constructor(public userService: UserService,
                public activeRoute: ActivatedRoute,
                private offcanvasService: NgbOffcanvas,
                public router: Router) {
        super(userService, UsersFilterModel);
        this.tableCollection.options.isHaveAction = true;
        this.tableCollection.headers = [
            {key: 'username', display: 'USERS_PAGE.USERNAME', sortingColumn: 'username'},
            {key: 'email', display: 'USERS_PAGE.EMAIL'},
            {key: 'locked', display: 'USERS_PAGE.LOCKED', type: HeaderTypes.Boolean},
            {key: 'active', display: 'USERS_PAGE.ACTIVE', type: HeaderTypes.Boolean},
            {key: 'createdAt', display: 'USERS_PAGE.CREATED_AT', type: HeaderTypes.DateTime},
        ];
        this.tableCollection.actions = [
            {
                name: 'USERS_PAGE.EDIT', iconName: 'mdi mdi-pencil', callBack: (row: UsersModel) => {
                    this.manageItem(row);
                }
            },
            {
                name: 'GENERAL.DETAILS', iconName: 'fas fa-angle-right', callBack: (row: UsersModel) => {
                    this.selectedUser = new UsersModel();
                    this.selectedUser = row;
                    this.offcanvasService.open(this.detailsContent, {
                        backdrop: 'static',
                        position: this.selectedLanguage.lang == 'ar' ? 'start' : 'end'
                    });
                }
            }
        ];

    }





}
