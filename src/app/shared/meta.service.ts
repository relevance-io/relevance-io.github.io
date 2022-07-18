import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

/**
 * This service is used to inject SEO data into page components.
 */
@Injectable()
export class MetaService {

  private siteName = 'relevance.io';
  private siteImage = '';

  constructor(
    private metaService: Meta,
    private titleService: Title,
  ) { }

  /**
   * Inject page metadata.
   */
  public injectMetadata(title: string, description: string): void {
    const pageTitle = title ? `${title} - ${this.siteName}` : this.siteName;
    this.titleService.setTitle(pageTitle);

    const url = '' + window.location.href;

    this.metaService.addTags([
      { name: 'og:type', content: 'website' },
      { name: 'og:image', content: this.siteImage },
      { name: 'og:site_name', content: this.siteName },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: this.siteImage },
      { name: 'twitter:site', content: this.siteName },
      { name: 'twitter:creator', content: this.siteName },
      { name: 'og:title', content: pageTitle },
      { name: 'description', content: description },
      { name: 'og:description', content: description },
      { name: 'twitter:title', content: pageTitle },
      { name: 'og:url', content: url },
    ], true);

  }

}
