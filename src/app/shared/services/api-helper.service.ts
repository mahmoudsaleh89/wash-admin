import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map, catchError, finalize} from 'rxjs/operators';
import {TranslateService} from "@ngx-translate/core";
import {formatDate} from "@angular/common";


@Injectable({providedIn: 'root'})
export class ApiHelperService {
    language = (localStorage.getItem('lang')) ? localStorage.getItem('lang') : 'en';

    constructor(private http: HttpClient) {
    }

    protected getFileRequestHeaders(customHeader: HttpHeaders): HttpHeaders {
        if (!customHeader) {
            customHeader = new HttpHeaders();
        }
        let headers = customHeader
            .set("Accept", "application/json")
            .set("Accept-Language", this.language)
            .set("lang", this.language)
        return headers;
    }

    protected getRequestHeaders(customHeader: HttpHeaders): HttpHeaders {

        if (!customHeader) {
            customHeader = new HttpHeaders();
        }
        let headers = customHeader.set("Content-Type", "application/json")
            .set("Accept", "application/json")
            .set("Accept-Language", this.language)
            .set("lang", this.language)
        return headers;
    }

    postWithStringParams<TData, TResponse>(uri: string, data: TData, options?: {}, headers?: HttpHeaders): Observable<TResponse> {

        let content: any = data;
        if (!options) {
            options = {
                headers: this.getRequestHeaders(headers)
            };
            content = JSON.stringify(data)
        }
        return this.http.post(uri, content, options).pipe(
            map((res: TResponse | any) => {
                return res;
            }),
            catchError((error: any) => {
                console.log(error)
                return error;
            }),
            finalize(() => {
                return true
            }));
    }

    post<TData, TResponse>(uri: string, data: TData, options?: {}, headers?: HttpHeaders): Observable<TResponse> {

        let content: any = data;
        if (!options) {
            options = {
                headers: this.getRequestHeaders(headers)
            };
            //content = JSON.stringify(data)
        }
        return this.http.post(uri, content, options).pipe(
            map((res: TResponse | any) => {
                return res;
            }),
            catchError((error: any) => {
                console.log(error)
                return error;
            }),
            finalize(() => {
                return true
            }));
    }

    get<TResponse>(uri: string, params = new HttpParams(), headers?: HttpHeaders): Observable<TResponse> {
        let options = {
            params: params,
            headers: this.getRequestHeaders(headers)
        };
        return this.http.get(uri, options).pipe(
            map((res: TResponse | any) => {
                return res
            }),
            catchError((error: any) => {
                return error;
            }),
            finalize(() => {
                return true
            }));
    }

    filterToQuery(filter): string {
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

    getBlobPost<TData>(uri: string, data: TData) {
        var options: any = {
            responseType: 'blob',
            headers: {'Accept-Language': this.language}
        };
        return this.http.post<Blob>(uri, data, options);
    }
}
