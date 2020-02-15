import { Component } from '@angular/core';
import { DataManagerService } from 'src/app/data.service';
import { UploadComponent } from './upload/upload.page';
import { AceComponent, AceDirective, AceConfigInterface } from 'ngx-ace-wrapper';
import { MatDialog } from '@angular/material/dialog';
import { Md5 } from 'ts-md5';

import 'brace';
import 'brace/mode/css';
import 'brace/mode/handlebars';
import 'brace/mode/javascript';
import 'brace/theme/github';

@Component({
    templateUrl: 'resources.page.html',
    styleUrls: ['resources.page.scss'],
    selector: 'app-resources'
})
export class ResourcesComponent {
    files: file[] = [];
    route = "";
    routeArr = [];
    activeIndex: number = null;
    code: (code | image | video | fileErr)[] = [];
    mode: string = '';
    filesOpen: boolean = true;

    constructor(private dataMngr: DataManagerService, private modal: MatDialog) {
        this.onRoute(this.route);
    }

    onRoute(path) {
        this.dataMngr.post('resouces-load', {path}).then((data: routeData) => {
            this.route = data.route;
            this.files = data.files.sort((a: file, b: file) => {
                if(a.directory && b.directory || a.file && b.file){
                    return a.name > b.name ? 1 : b.name > a.name ? -1 : 0;
                } else {
                    return a.file && b.directory ? 1 : b.directory && a.file ? -1 : 0;
                }
            });
            this.onCalcRouteArr();
        });
        
    }

    onBackRoute() {
        if(this.route !== "") {
            let routeArr = this.route.split('/');
            routeArr.pop();
            this.onRoute(routeArr.join('/'));
        }
    }

    onCalcRouteArr() {
        let arr = this.route.split('/');
        console.log(arr);
        let routes: route[] = [ ];
        if(arr.length > 0) {
            arr.forEach((route, i) => {
                if(route === ''){
                    routes.push({
                        text: 'resources',
                        path: '',
                        active: false
                    });
                } else if(routes[i-1].path === ''){
                    routes.push({
                        text: route,
                        path: route,
                        active: false
                    });
                } else {
                    routes.push({
                        text: route,
                        path: routes[i].path + '/' + route,
                        active: false
                    });
                }

                if(i === arr.length - 1) {
                    routes[i].active = true;
                    this.routeArr = routes;
                }
            })
        }
    }

    onUpload() {
        const modal = this.modal.open(UploadComponent, {
            width: '350',
            
        });
        modal.afterClosed().subscribe((files: Array<File>) => {
            let formData = new FormData();
            for(let i = 0; i < files.length; i++) {
                let file = files[i];
                formData.append('files_'+i, file);
            }
            formData.append('dest', this.route);
            this.dataMngr.filePost('upload-file', formData).then((result:any) => {
                if(result.ok) this.onRoute(this.route);
            })
        });
    }

    onOpen(file: file) {
        if(file.file) {
            let path = file.path.split('resources').pop();
            const handler = '/_clientfile/resources';
            const codeTypes = {
                css: 'css',
                js: 'javascript'
            }
            const videoTypes = ['mp4', 'webm', 'avi'];
            const imageTypes = ['jpg', 'jpeg', 'png', 'ico'];

            let fileExt = file.name.split('.').pop();
            console.log(fileExt);
            this.code.forEach((code) => {
                code.active = false;
            })
            if(Object.keys(codeTypes).indexOf(fileExt) >= 0) {
                this.dataMngr.get(handler + path).then((fileData: Blob) => {
                    const reader = new FileReader();
                    reader.addEventListener('loadend', (e) => {
                        let codeText = <string>reader.result;
                        let codeHash = Md5.hashStr(codeText).toString();
                        let code: code = {
                            name: file.name,
                            active: true,
                            lastEdit: codeHash,
                            lastSave: codeHash,
                            path: file.path,
                            config: {
                                mode: codeTypes[file.name.split('.').pop()],
                                theme: 'github',
                                readOnly : false
                            },
                            code: codeText
                        };
                        console.log(code);
                        this.code.push(code);
                        this.activeIndex = this.code.length -1;
                    });
                    reader.readAsText(fileData);
                });
            }

            else if (videoTypes.indexOf(fileExt) >= 0) {
                this.code.push({
                    active: true,
                    name: file.name,
                    type: 'video',
                    fileType: fileExt,
                    path: file.path
                } as video);
                this.activeIndex = this.code.length -1;
            }

            else if (imageTypes.indexOf(fileExt) >= 0) {
                this.code.push({
                    active: true,
                    name: file.name,
                    type: 'image',
                    fileType: fileExt,
                    path: file.path
                } as image);
                this.activeIndex = this.code.length -1;
            }

            else {
                this.code.push({ 
                    active: true,
                    name: file.name 
                } as fileErr);
                this.activeIndex = this.code.length -1;
            }
            
        } else if (file.directory) {
            let path = this.route + '/' + file.name;
            this.onRoute(path);
        }
    }

    onSave() {

    }

    onEdited(i) {
        let file: code = <code>this.code[i];
        file.lastEdit = Md5.hashStr(file.code).toString();
        console.log(file.lastEdit, file.lastSave);
    }

    onActive(index) {
        this.code.forEach((code, i) => {
            if(index == i) {
                code.active = true;
            } else {
                code.active = false;
            }
        });
        this.activeIndex = index;
    }

    onClose(index) {
        // check if code is saved and alert user to save then close
        if(this.code[index].active && this.code.length > 1){
            if(index === 0) {
                this.code[1].active = true;
                this.activeIndex = 1;
            } else {
                this.code[index - 1].active = true;
                this.activeIndex = index - 1;
            }
        }else if(this.code.length == 1){
            this.activeIndex = null;
        }
        this.code.splice(index, 1);
    }

    onToggleFiles(e:Event = null) {
        if(e) e.preventDefault();
        this.filesOpen = !this.filesOpen;
    }

    
}

interface route {
    active: boolean;
    text: string;
    path: string;
}

interface routeData {
    route: string;
    files: file[]
};

interface file {
    name: string;
    path: string;
    directory?: boolean;
    file?: boolean;
}

interface fileErr {
    active: boolean;
    name: string;
}

interface video {
    active: boolean;
    name: string;
    type: 'video';
    fileType: 'mp4' | 'webm';
    path: string;
}

interface image {
    active: boolean;
    name: string;
    type: 'image';
    fileType: 'jpeg' | 'ico' | 'png';
    path: string;
}

interface code {
    name: string;
    active: boolean;
    lastEdit: string;
    lastSave: string;
    path: string;
    config: AceConfigInterface;
    code: string;
}
