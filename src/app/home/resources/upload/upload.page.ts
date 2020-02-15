import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface PageData {
    parent: string;
    types: {};
    parentRoute?: string;
    page?: string;
}

@Component({
    templateUrl: 'upload.page.html',
    styleUrls: ['upload.page.scss'],
    selector: 'app-upload'
})
export class UploadComponent {
    files: Array<File> = [];

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: PageData,
        public dialogRef: MatDialogRef<UploadComponent>
    ) {
        console.log(this.data);
    }

    onFiles(event:any) {
        this.files = [];
        let files = <FileList>event.target.files;
        for(let i = 0; i < files.length; i++) {
            let file:File = files[i];
            this.files.push(file);
        }
    }

    onSave() {
        this.onClose(this.files);
    }

    onClose(file: Boolean | Array<File> = false) {
        this.dialogRef.close(file);
    }
}
