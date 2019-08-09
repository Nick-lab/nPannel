import { NgModule } from '@angular/core';
import { SettingsComponent } from './settings.page';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

const Routes: Routes = [{
    path: '',
    component: SettingsComponent
}];

@NgModule({
    imports: [
        FormsModule,
        RouterModule.forChild(Routes)
    ],
    declarations: [
        SettingsComponent
    ]
})
export class SettingsModule {}
