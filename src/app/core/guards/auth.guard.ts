import {Injectable} from '@angular/core';
import {Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {AuthService} from '../services/auth.service';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private authenticationService: AuthService,
    ) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const expectedRole = route.data.role;
        if (this.authenticationService.getToken()) {
            return  true;
           /* if (expectedRole == this.authenticationService.user.userTypeId) {
                return true;
            } else {
                //unthrized page
                this.router.navigate(['/authorization/sign-in']);
                return false;
            }*/

        } else {
            this.router.navigate(['/authorization/sign-in']);
            return false;
        }

    }
}
