import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import MetisMenu from 'metismenujs';
import {Router, NavigationEnd} from '@angular/router';
import {MenuItem} from './menu.model';

import {TranslateService} from '@ngx-translate/core';
import {AuthService} from "../../core/services/auth.service";
import {UserType} from "../../core/enums/user-type";

@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})

export class SidebarComponent implements OnInit {
    superAdminMenu: MenuItem[] = [
        {
            id: 1,
            label: 'MENU.Dashboard',
            icon: ' fas fa-home',
            link: '/admin/dashboard',
        },
        {
            id: 2,
            label: 'MENU.USERS',
            icon: ' fas fa-user-friends',
            link: '/admin/users',
        },
        {
            id: 3,
            label: 'MENU.SURVEYS',
            icon: 'fas fa-grip-horizontal',
            link: '/admin/surveys',
        },
        {
            id: 4,
            label: 'MENU.ASSESSMENTS',
            icon: 'fas fa-clipboard-list',
            link: '/admin/assessments',
        },
        {
            id: 5,
            label: 'MENU.DOMAINS',
            icon: ' fas fa-grip-vertical',
            link: '/admin/domains',
        }
    ];
    facilitiesUserMenu: MenuItem[] = [
        {
            id: 1,
            label: 'MENU.Dashboard',
            icon: ' fas fa-home',
            link: '/admin/dashboard',
        },
        {
            id: 2,
            label: 'MENU.USERS',
            icon: ' fas fa-user-friends',
            link: '/admin/users',
        }
    ];
    contentManagerMenu: MenuItem[] = [
        {
            id: 1,
            label: 'MENU.Dashboard',
            icon: ' fas fa-home',
            link: '/admin/dashboard',
        },
        {
            id: 2,
            label: 'MENU.USERS',
            icon: ' fas fa-user-friends',
            link: '/admin/users',
        }
    ];
    @ViewChild('sideMenu') sideMenu!: ElementRef;
    menu: any;
    menuItems: MenuItem[] = [];

    constructor(private router: Router,
                public authService: AuthService,
                public translate: TranslateService) {
        translate.setDefaultLang('en');
        router.events.forEach((event) => {
            if (event instanceof NavigationEnd) {
                this._activateMenuDropdown();
            }
        });
    }

    ngOnInit(): void {
        if (this.authService.user.userTypeId == UserType.SuperAdmin) {
            this.menuItems = this.superAdminMenu;
        } else if (this.authService.user.userTypeId == UserType.FacilitiesUser) {
            this.menuItems = this.facilitiesUserMenu;
        } else if (this.authService.user.userTypeId == UserType.ContentManager) {
            this.menuItems = this.contentManagerMenu;
        }else{
            this.menuItems = this.superAdminMenu;
        }
    }

    initialize(): void {
        this.menuItems = [];
    }


    ngAfterViewInit() {
        this.menu = new MetisMenu('#side-menu');
        this._activateMenuDropdown();
    }


    hasItems(item: MenuItem) {
        return item.subItems !== undefined ? item.subItems.length > 0 : false;
    }

    _removeAllClass(className: any) {
        const els = document.getElementsByClassName(className);
        while (els[0]) {
            els[0].classList.remove(className);
        }
    }

    _activateMenuDropdown() {
        this._removeAllClass('mm-active');
        this._removeAllClass('mm-show');
        const links: any = document.getElementsByClassName('side-nav-link-ref');
        let menuItemEl = null;
        // tslint:disable-next-line: prefer-for-of
        const paths = [];
        for (let i = 0; i < links.length; i++) {
            paths.push(links[i]['pathname']);
        }
        var itemIndex = paths.indexOf(window.location.pathname);
        if (itemIndex === -1) {
            const strIndex = window.location.pathname.lastIndexOf('/');
            const item = window.location.pathname.substr(0, strIndex).toString();
            menuItemEl = links[paths.indexOf(item)];
        } else {
            menuItemEl = links[itemIndex];
        }
        if (menuItemEl) {
            menuItemEl.classList.add('active');
            const parentEl = menuItemEl.parentElement;
            if (parentEl) {
                parentEl.classList.add('mm-active');
                const parent2El = parentEl.parentElement.closest('ul');
                if (parent2El && parent2El.id !== 'side-menu') {
                    parent2El.classList.add('mm-show');
                    const parent3El = parent2El.parentElement;
                    if (parent3El && parent3El.id !== 'side-menu') {
                        parent3El.classList.add('mm-active');
                        const childAnchor = parent3El.querySelector('.has-arrow');
                        const childDropdown = parent3El.querySelector('.has-dropdown');
                        if (childAnchor) {
                            childAnchor.classList.add('mm-active');
                        }
                        if (childDropdown) {
                            childDropdown.classList.add('mm-active');
                        }
                        const parent4El = parent3El.parentElement;
                        if (parent4El && parent4El.id !== 'side-menu') {
                            parent4El.classList.add('mm-show');
                            const parent5El = parent4El.parentElement;
                            if (parent5El && parent5El.id !== 'side-menu') {
                                parent5El.classList.add('mm-active');
                                const childanchor = parent5El.querySelector('.is-parent');
                                if (childanchor && parent5El.id !== 'side-menu') {
                                    childanchor.classList.add('mm-active');
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
