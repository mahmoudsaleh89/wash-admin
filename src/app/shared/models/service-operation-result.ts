export class ServiceOperationResult<TEntity> {
    isSuccess: boolean;
    data: Array<TEntity>
    errors: Array<any>
    count: number;
    result: TableResult;

    constructor() {
        this.isSuccess = false;
        this.data = [];
        this.errors = [];
        this.count = 0;
        this.result = new TableResult()
    }
}


export class TableResult {
    items: Array<any> = [];
    count: number = 0;
    page: number = 0;
    totalCount: number = 0;
    totalPages: number = 0;


}
