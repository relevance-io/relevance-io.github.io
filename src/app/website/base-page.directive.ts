import { Directive, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { MetaService } from 'src/app/shared/meta.service';
import { NotifyDialogComponent } from 'src/app/shared/notify-dialog.component';

@Directive({})
export abstract class BasePageDirective implements OnInit {

  protected abstract title: string;
  protected abstract description: string;

  constructor(
    private metaService: MetaService,
    private dialogService: MatDialog,
  ) { }

  ngOnInit() {
    this.metaService.injectMetadata(
      this.title,
      this.description,
    );
  }

  /**
   * Open the contact us dialog.
   */
  public openContactDialog(): false {
    NotifyDialogComponent.open(this.dialogService);
    return false;
  }

  /**
   * Scroll to a specific element.
   */
  public scrollTo(el: HTMLElement) {
    el.scrollIntoView({behavior: 'smooth'});
  }

}
