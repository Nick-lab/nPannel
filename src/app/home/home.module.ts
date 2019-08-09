import { NgModule } from '@angular/core';
import { HomeComponent } from './home.page';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const Routes: Routes = [{
    path: '',
    component: HomeComponent,
    children: [
        {
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        },
        {
            path: 'pages',
            loadChildren: './pages/pages.module#PagesModule'
        },
        {
            path: 'pages/:id',
            loadChildren: './pages/pages.module#PagesModule'
        },
        {
            path: 'settings',
            loadChildren: './settings/settings.module#SettingsModule'
        },
        {
            path: 'resources',
            loadChildren: './resources/resources.module#ResourcesModule'
        },
        {
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
        },
        {
            path: '',
            redirectTo: 'dashboard'
        }
    ]
}];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(Routes)
    ],
    declarations: [
        HomeComponent
    ]
})
export class HomeModule{}