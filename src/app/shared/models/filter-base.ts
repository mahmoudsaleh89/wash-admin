export class FilterBase {
    id?:number;
    page: number;
    pageSize: number;
    orderBy?: string;
    descendingDirection: boolean;
    userId?: number;
    constructor() {
        this.page = 0;
        this.id = 0;
        this.pageSize = 10;
        this.orderBy = '';
        this.descendingDirection = false;
        this.userId = 0;
    }
}
