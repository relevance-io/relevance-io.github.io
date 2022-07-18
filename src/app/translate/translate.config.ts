import { InjectionToken } from '@angular/core';

/**
 * Interface for the search service configuration.
 */
export interface TranslateServiceConfig {
  defaultLanguage: string;
  languageData?: {
    [language: string]: { [key: string]: string; };
  };
}

/**
 * This injection token can be used to inject the query API configuration.
 */
export const TRANSLATE_CONFIG = new InjectionToken<TranslateServiceConfig>('translate.config');
