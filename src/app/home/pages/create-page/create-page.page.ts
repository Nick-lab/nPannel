import { Component, Inject } from '@angular/core';
import { DataManagerService } from 'src/app/data.service';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Route } from '@angular/compiler/src/core';

export interface PageData {
    parent: string;
    types: {};
    parentRoute?: string;
    page?: string;
}

@Component({
    templateUrl: 'create-page.page.html',
    styleUrls: ['create-page.page.scss'],
    selector: 'app-create-page'
})
export class CreatePageComponent {
    parent;
    parentRoute;
    title: string;
    route;
    type;
    createdTypes;
    pageTypes = [
        {value: 'standard', label: 'Standard'}
    ];

    constructor(
        private dataMngr: DataManagerService,
        @Inject(MAT_DIALOG_DATA) public data: PageData,
        public dialogRef: MatDialogRef<CreatePageComponent>
    ) {
        this.parent = this.data.parent;
        this.parentRoute = this.data.parentRoute || false;
        this.createdTypes = this.data.types || {};
        this.buildPageTypes();
    }

    buildPageTypes() {
        console.log(this.createdTypes);
        if(!this.parent && !this.createdTypes['404']) this.pageTypes.push({value: '404', label: '404'});
        if(!this.createdTypes['default'])  this.pageTypes.push({value: 'default', label: 'Default'});
    }

    onSave() {
        const tmp = {
            do: this.data.page ? 'edit-page' : 'create-page',
            title: this.title,
            route: this.route,
            type: this.type,
            parent: this.parent
        }
        this.dataMngr.post('page', tmp).then(() => {
            this.onClose();
        });
    }

    onUpdateRoute() {
        this.route = (this.parentRoute ? this.parentRoute : '') + '/' + this.title.toLowerCase().replace(/[ ]/gm, '_');
    }

    onClose() {
        this.dialogRef.close();
    }
}
