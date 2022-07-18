import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { NotifyDialogComponent } from '../shared/notify-dialog.component';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent {

  constructor(
    private dialogService: MatDialog,
  ) { }

  /**
   * Open the contact us dialog.
   */
  public openContactDialog(): false {
    NotifyDialogComponent.open(this.dialogService);
    return false;
  }

}
