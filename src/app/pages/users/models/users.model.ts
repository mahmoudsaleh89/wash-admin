import {EntityBase} from "../../../shared/models/entity-base.model";

export class UsersModel extends EntityBase {
    username: string;
    email: string;
    mobile: string;
    active?: boolean;
    locked?: boolean;
    createdAt?: string;
    genderId: number;
    password: string;

    constructor() {
        super();
        this.username = '';
        this.email = '';
        this.mobile = '';
    }

}
