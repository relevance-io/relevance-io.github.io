import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';

import { HomePageComponent } from './home-page.component';
import { ProductsPageComponent } from './products-page.component';
import { LabsPageComponent } from './labs-page.component';
import { TeamPageComponent } from './team-page.component';
import { PrivacyPageComponent } from './privacy-page.component';
import { MissionPageComponent } from './mission-page.component';
import { ContactPageComponent } from './contact-page.component';
import { TemplatePageComponent } from './template-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'products',
    component: ProductsPageComponent,
  },
  {
    path: 'labs',
    component: LabsPageComponent,
  },
  {
    path: 'team',
    component: TeamPageComponent,
  },
  {
    path: 'privacy-and-terms',
    component: PrivacyPageComponent,
  },
  {
    path: 'mission',
    component: MissionPageComponent,
  },
  {
    path: 'contact',
    component: ContactPageComponent,
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    SharedModule,
  ],
  declarations: [
    HomePageComponent,
    ProductsPageComponent,
    LabsPageComponent,
    TeamPageComponent,
    PrivacyPageComponent,
    MissionPageComponent,
    ContactPageComponent,
    TemplatePageComponent,
  ],
})
export class WebsiteModule { }
