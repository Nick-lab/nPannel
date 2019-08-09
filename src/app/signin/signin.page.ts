import { Component } from '@angular/core';
import { DataManagerService } from '../data.service';
import { Md5 } from 'ts-md5';
import { Router } from '@angular/router';
@Component({
    templateUrl: 'signin.page.html',
    styleUrls: ['signin.page.scss'],
    selector: 'app-signin'
})
export class SigninComponent {
    invalid = false;
    email: string;
    emailValid = true;
    password: string;
    passValid = true;
    passFail = false;
    constructor(private dataMngr: DataManagerService, private router: Router) {}

    onSignin() {
        this.passFail = false;
        if (this.email && this.password) {
            const pass = Md5.hashStr(this.password);
            this.dataMngr.post('signin', {email: this.email, pass }).then((res) => {
                if (res) {
                    this.dataMngr.save('user-data', res);
                    this.router.navigate(['admin/'])
                } else {
                    this.password = '';
                    this.passFail = true;
                }
            });
        } else {
            if ( !this.email ) { this.emailValid = false; }
            if ( !this.password ) { this.passValid = false; }
        }
    }
}
