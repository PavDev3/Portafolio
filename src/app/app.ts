import { Component, inject } from '@angular/core';
import { Hero } from './components/hero/hero';
import { About } from './components/about/about';
import { Skills } from './components/skills/skills';
import { Projects } from './components/projects/projects';
import { Experience } from './components/experience/experience';
import { Contact } from './components/contact/contact';
import { LanguageService } from './i18n/language.service';
import { Lang } from './i18n/i18n.types';

@Component({
  imports: [Hero, About, Skills, Projects, Experience, Contact],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  private readonly language = inject(LanguageService);
  protected readonly lang = this.language.lang;
  protected readonly t = this.language.t;

  protected setLang(lang: Lang): void {
    this.language.setLang(lang);
  }
}
