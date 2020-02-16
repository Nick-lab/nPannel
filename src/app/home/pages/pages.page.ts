import { Component } from '@angular/core';
import { DataManagerService } from 'src/app/data.service';
import { CreatePageComponent } from './create-page/create-page.page';
import { CreatePartialComponent } from './create-partial/create-partial.page';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2'

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
    Toast: typeof Swal;
    parent;
    parentId;
    pages;
    partials;
    layouts;
    assets = {
        scripts: [],
        styles: [],
        meta: []
    };
    tab = 'pages';
    codeTab = 'template';
    types = {
        pages: ['home', 'default', '404'],
        partials: ['partial'],
        layout: ['layout']
    };
    code = {};
    pageTypes;

    exemptSubPages = ['default', '404']
    canSubPage = true;
    config: AceConfigInterface = {
        mode: 'text',
        theme: 'github',
        readOnly : false
    };
    meta_types = [
        'descriptions',
        'keywords',
        'og:title', 
        'og:type', 
        'og:url', 
        'og:image', 
        'og:description', 
        'og:site_name',
        'og:price:amount',
        'og:price:currency',
        'twitter:card',
        'twitter:site',
        'twitter:title',
        'twitter:description',
        'twitter:creator',
        'twitter:image'
    ];

    settings = {
        meta_type: '',
        meta_content: '',
        script: '',
        style: ''
    }

    constructor(
        private route: ActivatedRoute,
        private dataMngr: DataManagerService,
        private modal: MatDialog
    ) {
        this.Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 3000,
        });
        this.route.params.subscribe((params)=>{
            this.parentId = this.route.snapshot.paramMap.get('id') || false;
            this.onGetPages();
            this.code = {};
        });
    }

    onNewPage() {
        const modal = this.modal.open(CreatePageComponent, {
            width: '350',
            data: { parent: this.parentId, parentRoute: this.parent ? this.parent.route : false, types: this.pageTypes }
        });
        modal.afterClosed().subscribe(() => {
            this.onGetPages();
        });
    }

    onGetPages() {
        this.dataMngr.post('get-pages', {domain: this.dataMngr.user.domain, parent: this.parentId }).then((result: any) => {
            console.log(result, this.parentId);
            if (result) {
                this.pages = result.pages;
                this.parent = result.parent;
                this.pageTypes = result.types;
                this.partials = result.partials || [];
                this.layouts = result.layouts || [];
                this.assets = result.assets;
                console.log(this.assets);
                if(this.parent && this.exemptSubPages.indexOf(this.parent.type) >= 0) {
                    this.canSubPage = false;
                    this.tab = 'code'
                } 
            }
        });
        if(this.parent) this.openCode('template');
    }

    onNewPartial() {
        const modal = this.modal.open(CreatePartialComponent, {
            width: '350',
            
        });
        modal.afterClosed().subscribe((file) => {
            console.log('save partial', file)
            if(file && file !== '') {
                if(this.partials.indexOf(file) < 0) {
                    const formData = new FormData();
                    this.code[file] = '<h1>new partial</h1>';
                    new Promise((res) => {
                        Object.keys(this.code).forEach((key, index) => {
                            let path = `/views/partials/${key}.hbs`;
                            const blob = new Blob([this.code[key]]);
                            formData.append(key + '-path', path);
                            formData.append(key, blob);
                            if (Object.keys(this.code).length - 1 === index){
                                res();
                            }
                        });
                    }).then(()=>{
                        this.dataMngr.filePost('save-code', formData).then((result) => {
                            console.log(result);
                            this.onGetPages();
                            this.Toast.fire({
                                type: 'success',
                                title: 'Partials Created'
                            })
                        });
                    })
                } else {
                    this.Toast.fire({
                        type: 'error',
                        title: 'Duplicate Name',
                        titleText: 'Please give your partial a unique name!',
                        showCloseButton: true,
                        timer: null
                    })
                }
            } else if (file && file == '') {
                this.Toast.fire({
                    type: 'error',
                    title: 'No Name',
                    titleText: 'Please give your partial a name!',
                    showCloseButton: true,
                    timer: null
                })
            }
        });
    }

    openPartial(file) {
        let path = `/_clientfile/views/partials/${file}.hbs`;
        let mode = 'handlebars';
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

    onSavePartial(event: Event = null) {
        if(event) {
            event.preventDefault();
            console.log(event);
        }
        const formData = new FormData();
        new Promise((res) => {
            Object.keys(this.code).forEach((key, index) => {
                let path = `/views/partials/${key}.hbs`;
                const blob = new Blob([this.code[key]]);
                formData.append(key + '-path', path);
                formData.append(key, blob);
                if (Object.keys(this.code).length - 1 === index){
                    res();
                }
            });
        }).then(() => {
            this.dataMngr.filePost('save-code', formData).then((result) => {
                console.log(result);
                this.Toast.fire({
                    type: 'success',
                    title: 'Partials Saved'
                })
            });
        });
    }

    deletePartial(file) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result:any) => {
            if(result.value){
                this.dataMngr.post('delete-partial', {file: file}).then((data:any) => {
                    if(data.ok) {
                        Swal.fire(
                            'Deleted!',
                            `Partial ${file} has been deleted.`,
                            'success'
                        );
                        this.onGetPages();
                    }
                });
            }
        });
    }

    onNewLayout() {
        const modal = this.modal.open(CreatePartialComponent, {
            width: '350',
            
        });
        modal.afterClosed().subscribe((file) => {
            if(file && file !== '') {
                if(this.partials.indexOf(file) < 0) {
                    const formData = new FormData();
                    this.code[file] = `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <link rel="icon" type="image/x-icon" href="favicon.ico">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">

                            {{!-- Global Resources --}}
                            {{#each styles}}
                                <link rel="stylesheet" href="{{ this }}">
                            {{/each}}
                            {{!-- Page Resources --}}
                            <script src="/socket.io/socket.io.js"></script>
                            {{#each scripts}}
                                <script src="{{ this }}" <!-- {{#if defer}}async defer{{/if}} --> ></script>
                            {{/each}}
                            {{!-- Meta --}}
                            <title>{{ page.title }}</title>
                        </head>
                        <body class="body">
                            {{> header}}
                            {{{body}}}
                            {{> footer}}
                        </body>
                    </html>`;
                    new Promise((res) => {
                        Object.keys(this.code).forEach((key, index) => {
                            let path = `/views/layouts/${key}.hbs`;
                            const blob = new Blob([this.code[key]]);
                            formData.append(key + '-path', path);
                            formData.append(key, blob);
                            if (Object.keys(this.code).length - 1 === index){
                                res();
                            }
                        });
                    }).then(()=>{
                        this.dataMngr.filePost('save-code', formData).then((result) => {
                            console.log(result);
                            this.onGetPages();
                            this.Toast.fire({
                                type: 'success',
                                title: 'Layout Created'
                            })
                        });
                    })
                } else {
                    this.Toast.fire({
                        type: 'error',
                        title: 'Duplicate Name',
                        titleText: 'Please give your Layout a unique name!',
                        showCloseButton: true,
                        timer: null
                    })
                }
            } else if (file && file == '') {
                this.Toast.fire({
                    type: 'error',
                    title: 'No Name',
                    titleText: 'Please give your Layout a name!',
                    showCloseButton: true,
                    timer: null
                })
            }
        });
    }

    openLayout(file) {
        let path = `/_clientfile/views/layouts/${file}.hbs`;
        let mode = 'handlebars';
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

    onSaveLayout(event: Event = null) {
        if(event) {
            event.preventDefault();
            console.log(event);
        }
        const formData = new FormData();
        new Promise((res) => {
            Object.keys(this.code).forEach((key, index) => {
                let path = `/views/layouts/${key}.hbs`;
                const blob = new Blob([this.code[key]]);
                formData.append(key + '-path', path);
                formData.append(key, blob);
                if (Object.keys(this.code).length - 1 === index){
                    res();
                }
            });
        }).then(() => {
            this.dataMngr.filePost('save-code', formData).then((result) => {
                console.log(result);
                this.Toast.fire({
                    type: 'success',
                    title: 'Layout Saved'
                })
            });
        });
    }

    deleteLayout(file) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result:any) => {
            if(result.value){
                this.dataMngr.post('delete-playout', {file: file}).then((data:any) => {
                    if(data.ok) {
                        Swal.fire(
                            'Deleted!',
                            `Layout ${file} has been deleted.`,
                            'success'
                        );
                        this.onGetPages();
                    }
                });
            }
        });
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

    onSaveCode(event: Event = null) {
        if(event) {
            event.preventDefault();
            console.log(event);
        }
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
                console.log(result);
                this.Toast.fire({
                    type: 'success',
                    title: 'Code Saved'
                })
            });
        });
    }

    onUpdateFile(event: Event, type, id: any = false) {
        console.log(this.parentId, event, type, id);
    }

    onSaveFile(type) {
        console.log(type);
        let tmp = {
            do: 'save-file',
            type,
            page: this.parentId,
            content: null
        }
        switch(type) {
            case 'scripts': 
                tmp.content = this.settings.script;
                break;
            case 'styles':
                tmp.content = this.settings.style;
                break;
            case 'meta':
                tmp.content = {
                    meta_type: this.settings.meta_type,
                    meta_content: this.settings.meta_content
                }
                break;
        }
        
        this.dataMngr.post('page-settings', tmp).then((result:any) => {
            this.settings = {meta_type: '', meta_content: '', script: '', style: ''};
            if(result.ok) this.onGetPages();
            else console.error(result);
        })
    }

    onDeleteFile(id, type) {
        let tmp = {
            do: 'delete-file',
            type,
            id,
            page: this.parentId,
        }
        this.dataMngr.post('page-settings', tmp).then((result:any)=>{
            if(result.ok) this.onGetPages();
            else console.error(result);
        })
    }

    deletePage(file) {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result:any) => {
            console.log(result);
            if(result.value) {
                this.dataMngr.post('page', {do: 'delete-page', file: file}).then((data:any) => {
                    if(data.ok) {
                        Swal.fire(
                            'Deleted!',
                            `Partial ${file.title} has been deleted.`,
                            'success'
                        );
                        this.onGetPages();
                    }
                })
            }
        })
    }

    

}
