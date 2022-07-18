import { NgModule, ModuleWithProviders } from '@angular/core';

import { TranslateServiceConfig, TRANSLATE_CONFIG } from './translate.config';
import { TranslateService } from './translate.service';
import { TranslatePipe } from './translate.pipe';

@NgModule({
  declarations: [
    TranslatePipe,
  ],
  exports: [
    TranslatePipe,
  ],
})
export class TranslateModule {

  static forRoot(config: TranslateServiceConfig): ModuleWithProviders<TranslateModule> {
    return {
      ngModule: TranslateModule,
      providers: [
        TranslateService,
        {
          provide: TRANSLATE_CONFIG,
          useValue: config,
        },
      ],
    };
  }

  static forChild(config: TranslateServiceConfig): ModuleWithProviders<TranslateModule> {
    return TranslateModule.forRoot(config);
  }

}
