import { Component } from '@angular/core';

import { BasePageDirective } from './base-page.directive';

@Component({
  selector: 'app-privacy-page',
  templateUrl: './privacy-page.component.html',
  styleUrls: ['./privacy-page.component.scss']
})
export class PrivacyPageComponent extends BasePageDirective {

  protected title = 'Privacy and Terms';
  protected description = 'Privacy policy, Terms & Conditions for all relevance.io apps and websites';

}
