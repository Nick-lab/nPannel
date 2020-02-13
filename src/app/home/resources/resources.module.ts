import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AceModule } from 'ngx-ace-wrapper';

const Routes: Routes = [{
    path: '',
    component: ResourcesComponent
}];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AceModule,
        RouterModule.forChild(Routes)
    ],
    declarations: [
        ResourcesComponent
    ]
})
export class ResourcesModule {}
