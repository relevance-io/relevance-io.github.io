import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { NotifyDialogComponent } from './notify-dialog.component';

/**
 * This component renders the page header.
 */
@Component({
  selector: 'app-page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.scss']
})
export class PageHeaderComponent {

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
