import { Component } from '@angular/core';

import { BasePageDirective } from './base-page.directive';

@Component({
  selector: 'app-labs-page',
  templateUrl: './labs-page.component.html',
  styleUrls: ['./labs-page.component.scss']
})
export class LabsPageComponent extends BasePageDirective {

  protected title = 'Labs';
  protected description = 'Apps and experiments build with the Relevance Engine and SDK';

}
