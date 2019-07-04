import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';

import { RouterModule, Routes } from '@angular/router';
import { LanguagesComponent } from './languages/languages.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { AddLanguageComponent } from './add-language/add-language.component';

import { FormsModule } from '@angular/forms';
import { AnoPipe } from './ano.pipe';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'counter',
    component: ContadorComponent
  }, 
  {
    path: 'languages',
    component: LanguagesComponent
  },
  {
    path: 'add-language',
    component: AddLanguageComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    LanguagesComponent,
    HomeComponent,
    AddLanguageComponent,
    AnoPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
