export class EntityBase {
    id?: number;
    createdDate: any;
    createdBy: number | string;
    updateDate: any;
    updatedBy: number | string;
    isActive?: boolean;
    isDeleted?: boolean;

  constructor() {
    this.createdDate = '';
    this.createdBy = '';
    this.createdBy = '';
    this.updateDate = '';
    this.updatedBy = '';

  }

}
