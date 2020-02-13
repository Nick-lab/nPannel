import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PageData {
    parent: string;
    types: {};
    parentRoute?: string;
    page?: string;
}

@Component({
    templateUrl: 'create-partial.page.html',
    styleUrls: ['create-partial.page.scss'],
    selector: 'app-create-partial'
})
export class CreatePartialComponent {
    fileName: any = '';

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: PageData,
        public dialogRef: MatDialogRef<CreatePartialComponent>
    ) { }

    onSave() {
        this.onClose(this.fileName);
    }

    onClose(file = false) {
        this.dialogRef.close(file);
    }
}
