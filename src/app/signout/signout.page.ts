import { Component } from '@angular/core';
import { DataManagerService } from '../data.service';
@Component({
    templateUrl: 'signout.page.html',
    styleUrls: ['signout.page.scss'],
    selector: 'app-signout'
})
export class SignoutComponent {
    constructor(private dataMngr: DataManagerService) {
        this.dataMngr.logOut();
    }

    
}
