import { Component } from '@angular/core';
import {ListComponent} from "../../../shared/list.component";
import {Router} from "@angular/router";
import {DomainsModel} from "../models/domains.model";
import {DomainsFilterModel} from "../models/domains-filter.model";
import {DomainsService} from "../services/domains.service";

@Component({
  selector: 'app-domains',
  templateUrl: './domains.component.html',
  styleUrls: ['./domains.component.scss']
})
export class DomainsComponent extends ListComponent<DomainsModel, DomainsFilterModel> {
  constructor(public domainsService: DomainsService,
              public router: Router) {
    super(domainsService, DomainsFilterModel);
  }

}
