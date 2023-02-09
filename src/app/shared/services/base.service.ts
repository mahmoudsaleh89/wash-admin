import {environment} from "src/environments/environment";
import {EntityBase} from "../models/entity-base.model";
import {FilterBase} from "../models/filter-base";
import {ApiHelperService} from "./api-helper.service";
import {ServiceOperationResult} from "../models/service-operation-result";
import {Inject, Injectable} from "@angular/core";
import {HttpHeaders} from "@angular/common/http";
import {formatDate} from "@angular/common";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root'})
export class ServiceBase<TEntity extends EntityBase, TFilters extends FilterBase> {
    apiUrl: string;

    constructor(protected apiHelper: ApiHelperService, @Inject('serviceURi') private serviceURi: string) {
        this.setApiUrl(serviceURi);
    }

    setApiUrl(apiUrl) {
        this.apiUrl = environment.serviceUrl + apiUrl;
    }

    getAll(filter?: TFilters): Observable<any> {
        const headers = new HttpHeaders()
            .set("silent-call", "true")
        const url = this.apiUrl + this.convertParamsToQuery(filter);
        return this.apiHelper.get<ServiceOperationResult<TEntity>>(url, null, headers);
    }

    onUpdate(entity: any): Observable<any> {
        return this.apiHelper.post(this.apiUrl + '/Update', entity);
    }

    onCreate(entity: any): Observable<any> {
        return this.apiHelper.post(this.apiUrl, entity);
    }

    getByID(id: number): Observable<any> {
        return this.apiHelper.get<ServiceOperationResult<TEntity>>(this.apiUrl + '/' + id);
    }

    convertParamsToQuery(filter): string {
        // this to stop browser cache in case of the get request.
        var buster = "nc" + Math.random() + "=1";
        var params = "?" + buster;
        if (filter) {
            let val
            let getValue = (value) => {
                if (this.isIsoDate(value)) {
                    const date = new Date(value);
                    val = formatDate(<Date>date, "MM/dd/yyyy", "en-us").toString();
                } else {
                    val = value
                }
                return val;
            };
            var filterParams = Object.keys(filter).map(key => key + '=' + getValue(filter[key])).join('&');
            params += "&" + filterParams;
        }
        return params;
    }

    isIsoDate(str: any) {
        if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) {
            return false;
        }
        const d = new Date(str);
        return d instanceof Date && d.toISOString() === str;
    }

    pdfExport(filter?: TFilters): Observable<any> {
        const url = this.apiUrl + '/ExportToPDF' + this.convertParamsToQuery(filter)
        return this.apiHelper.get(url);
    }

    excelExport(filter?: TFilters) {
        const url = this.apiUrl + '/ExportToExcel' + this.convertParamsToQuery(filter)
        return this.apiHelper.get(url);
    }
}
