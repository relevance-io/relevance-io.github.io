import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { GTagService } from './gtag.service';
import { EmailService } from './email.service';

import { environment } from 'src/environments/environment';

/**
 * This component displays a modal with an input box.
 */
@Component({
  selector: 'app-notify-dialog',
  templateUrl: './notify-dialog.component.html',
  styleUrls: ['./notify-dialog.component.scss'],
})
export class NotifyDialogComponent {

  public recaptchaPassed = false;
  public recaptchaSiteKey = environment.google.recaptchaSiteKey;
  public recaptchaToken = '';

  public formGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    userType: new FormControl('', [Validators.required]),
    optIn: new FormControl(true),
  });

  constructor(
    private dialogRef: MatDialogRef<NotifyDialogComponent>,
    private snackbar: MatSnackBar,
    private emailService: EmailService,
    private gtagService: GTagService,
  ) { }

  /**
   * Open the dialog.
   */
  public static open(
    dialogService: MatDialog,
  ): MatDialogRef<NotifyDialogComponent> {
    const options = {
      panelClass: 'notify',
    };

    return dialogService.open<NotifyDialogComponent>(NotifyDialogComponent, options);
  }

  /**
   * Close the dialog.
   */
  public close(): false {
    this.dialogRef.close();
    return false;
  }

  /**
   * Get response token from recaptcha.
   */
  public recaptchaPass($event: any) {
    this.recaptchaPassed = true;
    this.recaptchaToken = $event;
  }

  /**
   * Validate the form contents.
   */
  public validateForm(): boolean {
    return this.recaptchaPassed && this.formGroup.valid;
  }

  /**
   * On submitting the notify form
   */
  public submit(): false {
    if (!this.validateForm()) {
      return false;
    }

    this.emailService.subscribeToList(this.formGroup.get('email').value, {
      userType: this.formGroup.get('userType').value,
      optIn: this.formGroup.get('optIn').value,
    }).subscribe(() => {
      this.gtagService.event('mailing', 'notify');
      this.snackbar.open('We have added you to our notify list');
      this.dialogRef.close();
    }, err => {
      this.snackbar.open('There was an error in your submission');
      console.error('email service error', err);
    });

    return false;
  }

}
