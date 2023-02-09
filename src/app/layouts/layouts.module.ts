import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FeatherModule} from 'angular-feather';
import {allIcons} from 'angular-feather/icons';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {TranslateModule} from '@ngx-translate/core';
import {ClickOutsideModule} from 'ng-click-outside';
import {VerticalComponent} from './vertical/vertical.component';
import {TopbarComponent} from './topbar/topbar.component';
import {LayoutComponent} from './layout.component';
import {SidebarComponent} from './sidebar/sidebar.component';



@NgModule({
    declarations: [
        VerticalComponent,
        TopbarComponent,
        LayoutComponent,
        SidebarComponent
    ],
    imports: [
        CommonModule,
        RouterModule,
        FeatherModule.pick(allIcons),
        NgbDropdownModule,
        ClickOutsideModule,
        TranslateModule,
    ],
    providers: [],
    exports: [VerticalComponent]
})
export class LayoutsModule {
}
