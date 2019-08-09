import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const Routes: Routes = [{
    path: '',
    component: DashboardComponent
}];

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(Routes)
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule {}
