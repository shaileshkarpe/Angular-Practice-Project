import { Resolve } from '@angular/router';

import { AppsModule } from './../apps.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from "../layout/layout.module";
import { RevisionComponent } from './revision/revision.component';
import { PipeComponent } from './pipe/pipe.component';


@NgModule({
    declarations: [
        AppComponent,
        RevisionComponent,
        PipeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    exports: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        // * MATERIAL IMPORTS
        AppsModule,
        LayoutModule
    ]
})
export class AppModule {}
