import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_SNACK_BAR_DEFAULT_OPTIONS } from '@angular/material/snack-bar';

import { TranslateModule } from 'src/app/translate/translate.module';

import { SharedModule } from 'src/app/shared/shared.module';
import { WebsiteModule } from 'src/app/website/website.module';

import { AppComponent } from './app.component';

import languageDataEN from 'src/assets/i18n/en.json';
import languageDataFR from 'src/assets/i18n/fr.json';

const routes: Routes = [];

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    RouterModule.forRoot(
      routes,
      { scrollPositionRestoration: 'enabled' }
    ),
    BrowserModule,
    BrowserAnimationsModule,

    TranslateModule.forRoot({
      defaultLanguage: 'en',
      languageData: {
        en: languageDataEN,
        fr: languageDataFR,
      }
    }),

    SharedModule,
    WebsiteModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: { duration: 5000 },
    },
  ],

})
export class AppModule { }
