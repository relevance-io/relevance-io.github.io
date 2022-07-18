import { Pipe, PipeTransform } from '@angular/core';

import { TranslateService } from './translate.service';

/**
 * This pipe can be used in templates to perform instant translation.
 */
@Pipe({name: 'translate'})
export class TranslatePipe implements PipeTransform {

  constructor(
    private translateService: TranslateService,
  ) { }

  transform(key: string): string {
    return this.translateService.translate(key);
  }

}
