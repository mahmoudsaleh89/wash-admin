import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {UsersModel} from "../../pages/users/models/users.model";
import {slideInLeftAnimation, slideInRightAnimation} from "angular-animations";
import {NgForm} from "@angular/forms";
import {IdentityService} from "../../core/services/identity.service";
import {AuthService} from "../../core/services/auth.service";
import {Router} from "@angular/router";
import {BaseComponent} from "../../shared/base.component";
import {UserType} from "../../core/enums/user-type";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss'],
    animations: [
        slideInRightAnimation(),
        slideInLeftAnimation(),
    ]
})
export class SigninComponent extends BaseComponent implements OnInit {
    loginDetails = new UsersModel();
    loginAnimateState = false;
    backAnimateState = false;
    glassyBoxAnimateState = false;
    enableQueueSelection = false;
    queueSelectionAnimation = false;
    isShowPassword = false;
    @ViewChild('usernameViewChild') private usernameInput: ElementRef;
    showRecoverEmail: boolean;
    successMessage: boolean;
    errorMessage: boolean;

    constructor(public identityService: IdentityService,
                private authService: AuthService) {
        super();
        setTimeout(() => {
            this.glassyBoxAnimateState = true;
        }, 1);
    }

    ngOnInit() {
        super.ngOnInit();
    }

    onSubmit(form: NgForm) {
        debugger
        if (form.invalid) {
            return null
        } else {
           const  res = {jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoxfQ.TiUtcOw1gs2Ram0PapZB8kNeJHEPPXi0Fe-gbFomlq8"}

                    this.authService.setToken(res.jwt);
                    this.router.navigate(["/admin/dashboard"]);

            /*this.identityService.login(form.value).subscribe((res: any) => {
                res = {jwt: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJyb2xlIjoxfQ.TiUtcOw1gs2Ram0PapZB8kNeJHEPPXi0Fe-gbFomlq8"}
                if (res) {
                    if (res.jwt) {
                        this.authService.setToken(res.jwt);
                        this.router.navigate(["/admin/dashboard"]);
                    }
                }
            })*/
        }
    }

    toggleFieldTextType() {
        this.isShowPassword = !this.isShowPassword;
    }

    onAnimationDone(): void {
        if (document.activeElement?.id !== 'password' && this.usernameInput) {
            this.usernameInput.nativeElement.focus();
        }
    }

    onCancelQueueSelection(): void {
        this.enableQueueSelection = false;
        setTimeout(() => {
            this.backAnimateState = true;
            this.queueSelectionAnimation = false;
        }, 1);
    }

    onResetPassword(resetPasswordForm: NgForm) {
        if (resetPasswordForm.valid) {

            this.identityService.sendForgetPasswordEmail(resetPasswordForm.value.email).subscribe(res => {
                if (res) {
                    this.successMessage = true;
                    console.log(res);
                }

            });
        }

    }
}

