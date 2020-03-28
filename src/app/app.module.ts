import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { MaterialModule } from './material.module';
import { RouterModule } from '@angular/router';
import { Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component'; 
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkexpComponent } from './workexp/workexp.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ControlContainer } from '@angular/forms';
import { MatIconRegistry } from '@angular/material';

const appRoutes: Routes = [
  {
    path: '',
    component: AboutComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'workexp',
    component: WorkexpComponent
  },
  {
    path: 'projects',
    component: ProjectsComponent
  }

]

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    WorkexpComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
