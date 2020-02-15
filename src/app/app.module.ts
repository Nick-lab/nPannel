import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { AceModule } from 'ngx-ace-wrapper';
import { ACE_CONFIG } from 'ngx-ace-wrapper';
import { AceConfigInterface } from 'ngx-ace-wrapper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessGuard } from './access-gaurd.service';
import { DataManagerService } from './data.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { CreatePageComponent } from './home/pages/create-page/create-page.page';
import { CreatePartialComponent } from './home/pages/create-partial/create-partial.page';
import { UploadComponent } from './home/resources/upload/upload.page';

const DEFAULT_ACE_CONFIG: AceConfigInterface = { };

@NgModule({
  declarations: [
    AppComponent,
    CreatePageComponent,
    CreatePartialComponent,
    UploadComponent
  ],
  entryComponents: [
    CreatePageComponent,
    CreatePartialComponent,
    UploadComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatDialogModule,
    AceModule
  ],
  providers: [
    AccessGuard,
    DataManagerService,
    { provide: ACE_CONFIG, useValue: DEFAULT_ACE_CONFIG },
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
