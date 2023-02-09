import { Injectable } from '@angular/core';
import {ServiceBase} from "../../../shared/services/base.service";

import {ApiHelperService} from "../../../shared/services/api-helper.service";
import {DomainsModel} from "../models/domains.model";
import {DomainsFilterModel} from "../models/domains-filter.model";

@Injectable({
  providedIn: 'root'
})
export class DomainsService  extends ServiceBase<DomainsModel, DomainsFilterModel> {
  constructor(protected apiHelper: ApiHelperService) {
    super(apiHelper, 'domains');
  }
}
