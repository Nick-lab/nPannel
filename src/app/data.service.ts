import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpEventType, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Router } from '@angular/router';

@Injectable()
export class DataManagerService {
    public ep = 'localhost';
    public prod = environment.production;
    public uploadedPercentage;
    private devPoints = {
        ep: 'localhost:3000/'
    }

    private prodPoints = {
        ep: 'https://punchcardllc.com/_endpoints/punchcard_001/'
    }

    public user;

    constructor(
        private http: HttpClient,
        private router: Router
    ) {
        if (this.prod) {
            Object.keys(this.prodPoints).forEach((key) => {
                this[key] = this.prodPoints[key];
            });
        } else {
            Object.keys(this.devPoints).forEach((key) => {
                this[key] = this.devPoints[key];
            });
        }
    }

    private localSave(key: string, data: any) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    private localDelete(key: string) {
        localStorage.removeItem(key);
    }

    private Localload(key: string) {
        if (localStorage.getItem(key) != null) {
            return JSON.parse(localStorage.getItem(key));
        } else {
            return false;
        }
    }

    public save(key: string, data: any) {
        return this.localSave(key, data);
    }

    public load(key: string) {
        return this.Localload(key);
    }

    public post(command, data) {
        const headers:HttpHeaders = new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': 'http://localhost:3000/'
        });
        return new Promise((resolve, reject) => {
            this.http.post( '/' + command, JSON.stringify(data), { headers }).toPromise().then((response: any) => {
                // clearTimeout(timeout);
                if (response) {
                    resolve(response);
                } else {
                    resolve(false);
                }
            }).catch((error) => {
                // if (triggerError) this.serverError();
            });
        });
    }

    public async filePost(command: string, data: FormData) {
        return new Promise((res, rej) => {
            // data.append('command', command);
            this.http.post('/' + command, data, {
                reportProgress: true,
                observe: 'events',
                responseType: 'text',
                headers:  new HttpHeaders({processData: 'false'}),
            }).subscribe((event: HttpEvent<any>) => {
                switch (event.type) {
                    case HttpEventType.Sent:
                        // start
                        // load.present();
                        break;
                    case HttpEventType.Response:
                        // complete
                        // load.dismiss();
                        this.uploadedPercentage = 0;
                        res(event.body);
                        break;
                    case 1: {
                        if (Math.round(this.uploadedPercentage) !== Math.round(event['loaded'] / event['total'] * 100)) {
                            this.uploadedPercentage = event['loaded'] / event['total'] * 100;
                            // this.event.publish('loader', this.uploadedPercentage);
                        }
                        break;
                    }
                }
            });
        })
    }

    public get(path, options = false) {
        return new Promise((res, rej) => {
            this.http.get(path, {responseType: 'blob'}).subscribe((file) => {
                res(file);
            });
        });
    }

    public loadUser() {
        return new Promise((res) => {
            this.post('check-signin', {}).then((user) => {
                if(user){
                    this.user = user;
                } else {
                    this.user = null;
                    this.localDelete('user-data');
                }
                res(user);
            });
        })
    }

    public logOut() {
        this.user = null;
        this.localDelete('user-data');
    }
}
