import { NgModule } from '@angular/core';
import { TablesComponent } from './endpoints.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const Routes: Routes = [{
    path: '',
    component: TablesComponent
}];

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(Routes)
    ],
    declarations: [
        TablesComponent
    ]
})
export class TablesModule {}
