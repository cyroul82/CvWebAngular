import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import {ContactComponent} from './app.contactComponent';
import {ExperienceComponent} from './app.experienceComponent';
import {HeaderComponent} from './app.headerComponent';

@NgModule({
  declarations: [
    AppComponent, ContactComponent, ExperienceComponent, HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    // RouterModule.forRoot([
    //   {
    //     path: '',
    //     redirectTo: '/home',
    //     pathMatch: 'full'
    //   },
    //   {
    //     path: 'home',
    //     component: AppComponent
    //   },
    //   {
    //     path:'contact',
    //     component: ContactComponent
    //   }
    // ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
