import {Injectable} from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor, HttpResponse,
} from '@angular/common/http';
import {Observable, tap, throwError} from 'rxjs';

import {AuthService} from '../services/auth.service';
import {environment} from '../../../environments/environment';
import {LanguageModel} from "../models/language.model";

@Injectable()
export class JwtInterceptor implements HttpInterceptor {
    selectedLanguage: LanguageModel = (localStorage.getItem('language')) ? JSON.parse(localStorage.getItem('language')) : new LanguageModel();

    constructor(
        private authenticationService: AuthService
    ) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const header = req.headers.set("Accept-Language", this.selectedLanguage.lang).set('XKey','637837535618550428-a5ffacpd-783n-4391-a9ff-467d4a8cce98')
        const anonymousReq = req.clone({
            headers: header
        });
        if (req.headers.get("skip-authorization") || req.headers.get("authorization")) {
            return next.handle(anonymousReq);
        }

       /* if (req.url.toLowerCase().includes(environment.serviceUrl.toLowerCase())) {
            return next.handle(anonymousReq);
        }*/
        if (!this.authenticationService.isAuthunticated()) {
            return next.handle(anonymousReq);
        } else {
            const authReq = req.clone({
                headers: header.set('Authorization', `Bearer ${this.authenticationService.getToken()}`).set("Accept-Language", this.selectedLanguage.lang).set('XKey','637837535618550428-a5ffacpd-783n-4391-a9ff-467d4a8cce98')
            });
            // @ts-ignore
            return next.handle(authReq).toPromise();
        }
    }
}
