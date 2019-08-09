import { Component } from '@angular/core';
import { DataManagerService } from 'src/app/data.service';

@Component({
    templateUrl: 'resources.page.html',
    styleUrls: ['resources.page.scss'],
    selector: 'app-resources'
})
export class ResourcesComponent {
    constructor(private dataMngr: DataManagerService) {}

}
