import {Component, Inject, Injectable, OnInit} from "@angular/core";
import {EntityBase} from "./models/entity-base.model";

import {BaseComponent} from "./base.component";
import {ServiceBase} from "./services/base.service";


@Injectable()
@Component({
    template: '',
})
export abstract class ManageComponent<TEntity extends EntityBase> extends BaseComponent implements OnInit {
    entityDetails: TEntity;
    isEditMode = false;
    lookups: any;

    constructor(protected serviceBase: ServiceBase<any, any>, @Inject('entity') public entity: new () => TEntity) {
        super();
        this.activatedRoute.queryParams.subscribe((p) => {
            if (!p.filter) {
                this.isEditMode = false;
                this.entityDetails = new this.entity();
                this.entityDetails.isActive = true;
            } else {
                const params = p.filter;
                const decodedParams = JSON.parse(this.decode(params));
                this.isEditMode = !!decodedParams.id;
                this.entityDetails = new this.entity();
                this.entityDetails.id = decodedParams.id;
                this.entityDetails.isActive = !this.isEditMode ? true : this.entityDetails.isActive;

            }
        });
    }

    ngOnInit() {
        super.ngOnInit();
        if (this.isEditMode) {
            this.serviceBase.getByID(this.entityDetails.id).subscribe((res) => {
                if (!res.data) {
                    this.entityDetails = res;
                } else {
                    this.entityDetails = res.data;
                }
            })
        }
    }

    backToList() {
        const urlTree = this.router.parseUrl(this.router.url);
        let paramsTemp = JSON.parse(this.decode(urlTree.queryParams['filter']));
        paramsTemp.id = 0;
        const params = this.encode(JSON.stringify(paramsTemp));
        let urlWithoutParams: any = urlTree.root.children['primary'].segments.map(it => it.path);
        urlWithoutParams.pop();
        urlWithoutParams.join('/');
        this.router.navigate([urlWithoutParams.join('/')], {
            relativeTo: this.activatedRoute,
            queryParams: {filter: params}
        });
    }


}
