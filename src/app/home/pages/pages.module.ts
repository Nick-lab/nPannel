import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { PagesComponent } from './pages.page';
import { AceModule } from 'ngx-ace-wrapper';

const Routes: Routes = [
    {
        path: '',
        component: PagesComponent
    }
];

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        AceModule,
        RouterModule.forChild(Routes)
    ],
    declarations: [
        PagesComponent
    ]
})
export class PagesModule {}
