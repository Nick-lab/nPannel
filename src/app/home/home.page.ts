import { Component } from '@angular/core';
import { DataManagerService } from '../data.service';

@Component({
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss'],
    selector: 'app-home'
})
export class HomeComponent {
    menuOpen = false;
    sideMenu = false;
    constructor(private dataMngr: DataManagerService) {
        this.dataMngr.loadUser();
    }

    onToggleMenu() { this.menuOpen = !this.menuOpen; }
    onToggleSide() { this.sideMenu = !this.sideMenu; }
}