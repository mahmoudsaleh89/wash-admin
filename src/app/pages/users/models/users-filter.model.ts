import {FilterBase} from "../../../shared/models/filter-base";

export class UsersFilterModel extends FilterBase {
    username: string;
    email: string;
    isActive: number;

    constructor() {
        super();
        this.isActive = 0;

    }
}
