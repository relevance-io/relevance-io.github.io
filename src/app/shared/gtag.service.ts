import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { environment } from '../../environments/environment';

declare let ga: (...args) => any;

@Injectable()
export class GTagService {

  constructor(
    public router: Router
  ) { }

  private push(...args): void {
    ga(...args);
  }

  public setup(): void {
    this.push('create', environment.google.trackerId, 'auto');

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.push('set', 'page', event.urlAfterRedirects);
        this.push('send', 'pageview');
      }
    });
  }

  public event(
    category: string,
    action: string,
    label: string = null,
    value: number = null,
  ): void {
    this.push('send', 'event', {
      eventCategory: category,
      eventLabel: label,
      eventAction: action,
      eventValue: value,
    });
  }

}
