import { Component } from '@angular/core';

/**
 * This component renders the privacy banner.
 */
@Component({
  selector: 'app-privacy-banner',
  templateUrl: './privacy-banner.component.html',
  styleUrls: ['./privacy-banner.component.scss']
})
export class PrivacyBannerComponent {

  /**
   * Check if the policy has been accepted.
   */
  public get policyAccepted(): boolean {
    return localStorage.getItem('relevance-policy') === 'true';
  }

  /**
   * The user has accepted the terms and conditions
   */
  public acceptAndClose(): false {
    localStorage.setItem('relevance-policy', 'true');
    return false;
  }

}
