import { Component } from '@angular/core';
import { DataManagerService } from 'src/app/data.service';
import { CreatePageComponent } from './create-page/create-page.page';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

import 'brace';
import 'brace/mode/css';
import 'brace/mode/handlebars';
import 'brace/mode/javascript';
import 'brace/theme/github';

import { AceComponent, AceDirective, AceConfigInterface } from 'ngx-ace-wrapper';

@Component({
    templateUrl: 'pages.page.html',
    styleUrls: ['pages.page.scss'],
    selector: 'app-pages'
})
export class PagesComponent {
    parent;
    parentId;
    pages;
    tab = 'pages';
    codeTab = 'template';
    types = {
        pages: ['home', 'default', '404'],
        partials: ['partial'],
        layout: ['layout']
    };
    code = {};
    config: AceConfigInterface = {
        mode: 'text',
        theme: 'github',
        readOnly : false
    };

    constructor(
        private route: ActivatedRoute,
        private dataMngr: DataManagerService,
        private modal: MatDialog
    ) {
        this.route.params.subscribe((params)=>{
            this.parentId = this.route.snapshot.paramMap.get('id') || false;
            this.onGetPages();
            this.code = {};
        });
    }

    onNewPage() {
        const modal = this.modal.open(CreatePageComponent, {
            width: '350',
            data: { parent: this.parentId, parentRoute: this.parent ? this.parent.route : false }
        });
        modal.afterClosed().subscribe(() => {
            this.onGetPages();
        });
    }

    onGetPages() {
        this.dataMngr.post('get-pages', {domain: this.dataMngr.user.domain, parent: this.parentId }).then((result: any) => {
            if (result) {
                this.pages = result.pages;
                this.parent = result.parent;
            }
        });
        this.openCode('template');
    }

    openCode(file) {
        let path;
        let mode;
        const handler = '/_clientfile';

        switch (file) {
            case 'template':
                path = handler + '/views/' + this.parentId + '.hbs';
                mode = 'handlebars';
                break;
            case 'script':
                path = handler + '/page_scripts/' + this.parentId + '.js';
                mode = 'javascript';
                break;
            case 'style':
                path = handler + '/resources/css/' + this.parentId + '.css';
                mode = 'css';
                break;
        }
        if (this.code[file]) {
            this.config.mode = mode;
            this.codeTab = file;
        } else {
            this.dataMngr.get(path).then((fileData: Blob) => {
                const reader = new FileReader();
                reader.addEventListener('loadend', (e) => {
                    this.code[file] = reader.result;
                    this.config.mode = mode;
                    this.codeTab = file;
                });
                reader.readAsText(fileData);
            });
        }
    }

    onSaveCode() {
        const formData = new FormData();
        new Promise((res) => {
            Object.keys(this.code).forEach((key, index) => {
                let path;
                console.log('Saving:', this.code[key]);
                const blob = new Blob([this.code[key]]);
                switch (key) {
                    case 'template':
                        path = '/views/' + this.parentId + '.hbs';
                        break;
                    case 'script':
                        path = '/page_scripts/' + this.parentId + '.js';
                        break;
                    case 'style':
                        path = '/resources/css/' + this.parentId + '.css';
                        break;
                }
                formData.append(key + '-path', path);
                formData.append(key, blob);
                if (Object.keys(this.code).length - 1 === index){
                    res();
                }
            });
        }).then(() => {
            this.dataMngr.filePost('save-code', formData).then((result) => {

            });
        });
    }

}
