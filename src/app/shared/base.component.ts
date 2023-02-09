import {OnInit, OnDestroy, Component, EventEmitter} from '@angular/core';
import {LocatorService} from "../core/services/locator.service";
import {ActivatedRoute, Router,} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {LanguageModel} from "../core/models/language.model";
import {TranslateService} from "@ngx-translate/core";
import {Arabic} from "flatpickr/dist/l10n/ar";
import english from "flatpickr/dist/l10n/default";



@Component({
    template: '',
})
export class BaseComponent implements OnInit, OnDestroy {
    listLang: Array<LanguageModel> = [
        {text: 'English', flag: 'assets/images/flags/us.png', lang: 'en'},
        {text: 'العربية', flag: 'assets/images/flags/jor.png', lang: 'ar'},
    ];
    router: Router;
    translateService: TranslateService;
    activatedRoute: ActivatedRoute;
    direction: string = 'en';
    ngTitle: Title;
    title: string;
    selectedLanguage: LanguageModel = (localStorage.getItem('language')) ? JSON.parse(localStorage.getItem('language')) : new LanguageModel();
    public languages: string[] = ['en', 'ar'];


    constructor() {

        this.router = LocatorService.injector.get(Router);
        this.translateService = LocatorService.injector.get(TranslateService);
        this.activatedRoute = LocatorService.injector.get(ActivatedRoute);
        this.ngTitle = LocatorService.injector.get(Title);

        this.router.events.subscribe({
            next: (event) => {
                this.title = this.ngTitle.getTitle();
            }
        })
    }

    ngOnInit(): void {
        this.translateService.addLangs(this.languages);
        this.checkLanguage();
    }

    ngOnDestroy(): void {
    }

    decode(v: string): string {
        return decodeURIComponent(v);
    }

    encode(v: string): string {
        var decodedUrl = this.decode(v);
        return encodeURIComponent(decodedUrl);
    }

    jsonCopy(src: any) {
        return JSON.parse(JSON.stringify(src));
    }

    public setLanguage(updatedLanguage: LanguageModel) {
        this.selectedLanguage = updatedLanguage;
        localStorage.setItem('language', JSON.stringify(updatedLanguage))

        window.location.reload();
    }

    public checkLanguage() {
        this.selectedLanguage = (localStorage.getItem('language')) ? JSON.parse(localStorage.getItem('language')) : new LanguageModel();
        let html: HTMLCollection = document.getElementsByTagName('html');
        this.translateService.use(this.selectedLanguage.lang);
        if (this.selectedLanguage.lang == 'ar') {
            this.direction = "rtl";
            html[0].setAttribute('dir', 'rtl');
        } else {
            this.direction = "ltr";
            html[0].setAttribute('dir', 'ltr');
        }
    }

    getLanguage() {
        const lang = JSON.parse(localStorage.getItem('language')).lang;
        return lang;
    }

    getCalenderTranslate() {
        if (this.selectedLanguage.lang == "ar") {
            return Arabic
        } else {
            return english
        }
    }



}
