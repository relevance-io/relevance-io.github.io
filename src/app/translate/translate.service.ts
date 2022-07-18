import { Injectable, Inject } from '@angular/core';

import { TranslateServiceConfig, TRANSLATE_CONFIG } from './translate.config';

/**
 * This service manages the translation configuration and data.
 */
@Injectable()
export class TranslateService {

  private currentLanguage: string;

  constructor(
    @Inject(TRANSLATE_CONFIG) private config: TranslateServiceConfig,
  ) {
    this.currentLanguage = this.getDefaultLanguage();
  }

  /**
   * Set the current language in use.
   */
  public setLanguage(lang: string): void {
    this.currentLanguage = lang;
  }

  /**
   * Get the current language in use.
   */
  public getLanguage(): string {
    return this.currentLanguage;
  }

  /**
   * Get the list of available languages to use.
   */
  public getAvailableLanguages(): string[] {
    return Object.keys(this.config.languageData);
  }

  /**
   * Get the default language.
   */
  public getDefaultLanguage(): string {
    return this.config.defaultLanguage;
  }

  /**
   * Translate a string.
   */
  public translate(key: string): string {
    const lang = this.getLanguage();
    const result = this.config.languageData[lang][key];
    if (typeof result === 'undefined') {
      return key;
    }
    return result;
  }

}
