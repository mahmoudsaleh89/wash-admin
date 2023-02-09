import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {AuthService} from '../../core/services/auth.service';
import {BaseComponent} from "../../shared/base.component";
import {IdentityService} from "../../core/services/identity.service";

@Component({
    selector: 'app-topbar',
    templateUrl: './topbar.component.html',
    styleUrls: ['./topbar.component.scss']
})

/**
 * Topbar Component
 */
export class TopbarComponent extends BaseComponent implements OnInit {

    mode: string | undefined;
    @Output() mobileMenuButtonClicked = new EventEmitter();

    constructor(
        public authService: AuthService,
        public identityService : IdentityService,
        public translate: TranslateService,
    ) {
        super()
    }

    ngOnInit(): void {
    }


    checkLanguage() {
    }

    toggleMobileMenu(event: any) {
        event.preventDefault();
        this.mobileMenuButtonClicked.emit();
    }

    logout() {
        this.identityService.logout()

    }

}
