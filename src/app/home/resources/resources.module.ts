import { NgModule } from '@angular/core';
import { ResourcesComponent } from './resources.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const Routes: Routes = [{
    path: '',
    component: ResourcesComponent
}];

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(Routes)
    ],
    declarations: [
        ResourcesComponent
    ]
})
export class ResourcesModule {}
