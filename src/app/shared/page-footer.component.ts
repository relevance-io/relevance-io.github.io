import { Component } from '@angular/core';

/**
 * This component renders the page footer.
 */
@Component({
  selector: 'app-page-footer',
  templateUrl: './page-footer.component.html',
  styleUrls: ['./page-footer.component.scss']
})
export class PageFooterComponent {

  public year: number = new Date().getFullYear();

}
