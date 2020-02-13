import { NgModule } from '@angular/core';
import { EndpointsComponent } from './endpoints.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const Routes: Routes = [{
    path: '',
    component: EndpointsComponent
}];

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(Routes)
    ],
    declarations: [
        EndpointsComponent
    ]
})
export class EndpointsModule {}
