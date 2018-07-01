import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'angular-calendar';
import { DemoUtilsModule } from '../demo-utils/module';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { CalenderComponent } from './calender/calender.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { NoteComponent } from './note/note.component';
import { importdata } from './shared/services/importdata';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { RealnoteComponent } from './realnote/realnote.component';
import { selected } from './shared/services/selectEvent';
const appRoutes: Routes = [
  { path: 'Note', component: NoteComponent },
  { path: 'year-calendar',component: CalenderComponent },
  
  { path: '',
    redirectTo: 'year-calendar',
    pathMatch: 'full'
  },
  { path: '**', component: NoteComponent }
];


@NgModule({
  declarations: [
    AppComponent,
    CalenderComponent,
    HeaderComponent,
    MainComponent,
    NoteComponent,
    RealnoteComponent
  ],
  imports: [
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    CalendarModule.forRoot(),
    NgbModalModule.forRoot(),
    DemoUtilsModule,
    BrowserModule,
    CommonModule,
    HttpClientModule,
    CalendarModule.forRoot(),
    DemoUtilsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [importdata,selected],
  bootstrap: [AppComponent]
})
export class AppModule { }
