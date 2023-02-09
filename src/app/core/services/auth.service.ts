import {Injectable} from '@angular/core';
import {User} from '../models/auth.models';
import jwt_decode from "jwt-decode";


@Injectable({providedIn: 'root'})

export class AuthService {
    user!: User;

    constructor() {
        this.getToken();
    }

    setToken(token: string): void {
        localStorage.setItem('jwt', token);
        this.getToken();
    }

    getToken() {
        const token = localStorage.getItem('jwt')
        if (token) {
            this.user = jwt_decode(token);
        }

        return token;
    }

    getClaim(claim: string): any {
        const token = this.getToken();
        if (!token) return null;
        const decoded = jwt_decode(token);
        if (!decoded) return null;
        return decoded[claim];
    }

    isAuthunticated(): boolean {
        const date = this.getTokenExpirationDate();
        if (date == null) return false;
        return (date.valueOf() > new Date().valueOf());
    }

    getTokenExpirationDate(): Date {
        const claim = this.getClaim('exp');
        if (!claim) return null;
        const date = new Date(0);
        date.setUTCSeconds(claim);
        return date;
    }

}

