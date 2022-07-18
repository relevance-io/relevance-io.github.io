import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { RecaptchaModule } from 'ng-recaptcha';

import { TranslateModule } from 'src/app/translate/translate.module';

import { BaseModule } from 'src/app/base.module';

import { GTagService } from './gtag.service';
import { EmailService } from './email.service';
import { MetaService } from './meta.service';
import { PageHeaderComponent } from './page-header.component';
import { PageFooterComponent } from './page-footer.component';
import { PrivacyBannerComponent } from './privacy-banner.component';
import { NotifyDialogComponent } from './notify-dialog.component';

@NgModule({
  imports: [
    HttpClientModule,
    HttpClientJsonpModule,
    RecaptchaModule,
    TranslateModule,
    BaseModule,
  ],
  exports: [
    RecaptchaModule,
    TranslateModule,
    BaseModule,

    PageHeaderComponent,
    PageFooterComponent,
    PrivacyBannerComponent,
    NotifyDialogComponent,
  ],
  declarations: [
    PageHeaderComponent,
    PageFooterComponent,
    PrivacyBannerComponent,
    NotifyDialogComponent,
  ],
  providers: [
    EmailService,
    MetaService,
    GTagService,
  ],
  entryComponents: [
    NotifyDialogComponent,
  ],
})
export class SharedModule {

  constructor(
    gtagService: GTagService,
  ) {
    gtagService.setup();
  }

}
