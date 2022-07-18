import { Component } from '@angular/core';

import { BasePageDirective } from './base-page.directive';

@Component({
  selector: 'app-mission-page',
  templateUrl: './mission-page.component.html',
  styleUrls: ['./mission-page.component.scss']
})
export class MissionPageComponent extends BasePageDirective {

  protected title = 'Mission';
  protected description = 'Towards the ubiquitous Citizen Data Scientist';

}
