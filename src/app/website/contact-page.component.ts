import { Component } from '@angular/core';

import { BasePageDirective } from './base-page.directive';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})

export class ContactPageComponent extends BasePageDirective {

  protected title = 'Contact us';
  protected description = '';

}
