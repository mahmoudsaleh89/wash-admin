import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomainsComponent } from './domains/domains.component';
import {DomainsRoutingModule} from "./domains-routing.module";



@NgModule({
  declarations: [
    DomainsComponent
  ],
  imports: [
    CommonModule,
    DomainsRoutingModule
  ]
})
export class DomainsModule { }
