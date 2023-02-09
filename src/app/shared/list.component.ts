import {Component, Injectable, Inject} from '@angular/core';
import {BaseComponent} from './base.component';
import {EntityBase} from "./models/entity-base.model";
import {FilterBase} from "./models/filter-base";
import {ServiceBase} from "./services/base.service";
import {ServiceOperationResult} from "./models/service-operation-result";
import {DataTable} from "./responsive-table/interfaces";
import {UsersModel} from "../pages/users/models/users.model";


@Injectable()
@Component({
    template: '',
})
export abstract class ListComponent<TEntity extends EntityBase, TFilter extends FilterBase> extends BaseComponent {
    tableCollection: DataTable = {
        data: [],
        dataCount: 0,
        headers: [],
        options: {
            isHaveAction: false,
        },
        methods: {
            Search: (pageSize, pageIndex) => {
                this.filter.pageSize = pageSize;
                this.filter.page = pageIndex;
                this.loadEntities();
            }
        },
        actions: [],
        isLoading: false
    };
    filter: TFilter;
    activeFilter: TFilter;
    lookups: any;
    activeIds = "collapse-search";
    autoLoad = true;

    constructor(protected serviceBase: ServiceBase<TEntity, TFilter>,
                @Inject('filterType') public filterType: new () => TFilter) {
        super();
        this.filter = new this.filterType();
    }

    ngOnInit() {
        super.ngOnInit();

        const p = this.activatedRoute.snapshot.queryParamMap.get('filter');
        if (!p) {
            this.filter = new this.filterType();
            this.activeFilter = new this.filterType();
            this.loadEntities();
        } else {
            const params = p;
            this.filter = JSON.parse(this.decode(params));
            this.activeFilter = this.jsonCopy(this.filter);
            this.loadEntities();
        }
    }

    onRoute(queryFilter) {
        if (queryFilter) {
            this.filter = JSON.parse(this.decode(queryFilter));
            this.activeFilter = this.jsonCopy(this.filter);
            this.loadEntities();
        }
    }

    pageChanged(e) {
        this.activeFilter.pageSize = e.pageSize;
        this.activeFilter.page = e.pageIndex;
        this.filter.pageSize = e.pageSize;
        this.filter.page = e.pageIndex;
        this.loadEntities();
    }

    loadEntities() {
        if (this.autoLoad) {
            this.tableCollection.isLoading = true;
            let filterParams = this.encode(JSON.stringify(this.filter));
            this.router.navigate([], {
                relativeTo: this.activatedRoute,
                queryParams: {filter: filterParams},
                queryParamsHandling: 'merge'
            });
            this.activeFilter = this.jsonCopy(this.filter);
            this.serviceBase.getAll(this.activeFilter).subscribe(
                (response: ServiceOperationResult<TEntity>) => {
                    this.tableCollection.data = response.result.items;
                    /*  if (this.tableCollection.data.length) {
                          this.activeIds = [];
                      }*/
                    this.tableCollection.dataCount = response.result.totalCount;
                    this.tableCollection.isLoading = false;
                    this.lookups = response;
                }
            );
        }

    }

    search() {
        this.filter.page = 0;
        this.filter.pageSize = 10;
        this.activeFilter = this.jsonCopy(this.filter);
        this.loadEntities();
    }

    reset() {
        this.filter = new this.filterType();
        this.activeFilter = new this.filterType();
        this.clearQueryParams();
        this.loadEntities();
    }

    clearQueryParams() {
        // clear query params
        this.router.navigate([], {
            relativeTo: this.activatedRoute,
            queryParams: {},
            skipLocationChange: false
        });
    }


    manageItem(item?: TEntity) {
        this.filter.id = item?.id ? item.id : 0;
        let filterParams = this.encode(JSON.stringify(this.filter));
        const urlTree = this.router.parseUrl(this.router.url);
        let urlWithoutParams: any = urlTree.root.children['primary'].segments.map(it => it.path);
        urlWithoutParams.pop();
        urlWithoutParams.join('/');
        this.router.navigate([urlWithoutParams.join('/'), 'manage'], {
            relativeTo: this.activatedRoute,
            queryParams: {filter: filterParams},
            queryParamsHandling: 'merge'
        });
    }


    onPDFExport(name) {
        this.activeFilter = this.jsonCopy(this.filter);
        this.serviceBase.pdfExport(this.activeFilter).subscribe(
            (data: any) => {
                const objectUrl: string = URL.createObjectURL(data);
                const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

                a.href = objectUrl;
                a.download = this.translateService.instant(name) + '.pdf';
                document.body.appendChild(a);
                a.click();

                document.body.removeChild(a);
                URL.revokeObjectURL(objectUrl);
            },
            (error) => {
                // this.notifyService.showApiError('general.error', error.error[0].message);
            }
        );
    }

    onExcelExport(name) {
        this.activeFilter = this.jsonCopy(this.filter);
        this.serviceBase.excelExport(this.activeFilter).subscribe(
            (data: any) => {
                const objectUrl: string = URL.createObjectURL(data);
                const a: HTMLAnchorElement = document.createElement('a') as HTMLAnchorElement;

                a.href = objectUrl;
                a.download = this.translateService.instant(name) + '.xlsx';
                document.body.appendChild(a);
                a.click();

                document.body.removeChild(a);
                URL.revokeObjectURL(objectUrl);
            },
            (error) => {
                // this.notifyService.showApiError('general.error', error.error[0].message);
            }
        );
    }


}
