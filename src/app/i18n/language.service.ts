import { Injectable, computed, effect, signal } from '@angular/core';
import { Lang } from './i18n.types';
import { TRANSLATIONS, Translations } from './translations';

const STORAGE_KEY = 'portfolio-lang';

@Injectable({ providedIn: 'root' })
export class LanguageService {
  readonly lang = signal<Lang>(this.readStoredLang());
  readonly t = computed<Translations>(() => TRANSLATIONS[this.lang()]);

  constructor() {
    effect(() => {
      const current = this.lang();
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(STORAGE_KEY, current);
      }
      if (typeof document !== 'undefined') {
        document.documentElement.lang = current;
      }
    });
  }

  setLang(lang: Lang): void {
    this.lang.set(lang);
  }

  private readStoredLang(): Lang {
    if (typeof localStorage === 'undefined') {
      return 'es';
    }
    return localStorage.getItem(STORAGE_KEY) === 'en' ? 'en' : 'es';
  }
}
