import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';

/**
 * Describes a request to subscription to a mailing list.
 */
export interface SubscriptionRequest {
  userType: string[];
  optIn: boolean;
}

/**
 * This service allows to subscribe to list and send emails.
 */
@Injectable()
export class EmailService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  /**
   * Subscribe to a mailing list.
   */
  public subscribeToList(email: string, data: SubscriptionRequest): Observable<void> {
    let params = new HttpParams();
    params = params.set('id', environment.mailchimp.formId);
    params = params.set('u', environment.mailchimp.secret);
    params = params.set('EMAIL', email);
    params = params.set(`b_${environment.mailchimp.secret}_${environment.mailchimp.formId}`, '');

    for (const userType of data.userType) {
      params = params.set(userType, 'true');
    }

    if (data.optIn) {
      params = params.set(environment.mailchimp.optInGroup, 'true');
    }

    const url = `${environment.mailchimp.endpoint}?${params.toString()}`;
    return this.httpClient.jsonp<void>(url, 'c').pipe((c) => { console.log(c); return c; } );
  }

}
