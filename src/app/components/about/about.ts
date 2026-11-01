import { Component, computed, inject } from '@angular/core';
import { EDUCATION } from '../../data/experience.data';
import { LanguageService } from '../../i18n/language.service';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  private readonly language = inject(LanguageService);
  protected readonly t = this.language.t;

  protected readonly education = computed(() =>
    EDUCATION.map((edu) => ({ ...edu, title: edu.title[this.language.lang()] })),
  );
}
