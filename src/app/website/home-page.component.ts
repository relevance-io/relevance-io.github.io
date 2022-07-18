import { Component } from '@angular/core';

import { BasePageDirective } from './base-page.directive';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent extends BasePageDirective {

  protected title = '';
  protected description = 'Making Interactive Data Science simple and accessible';

}
