import { Component, computed, inject } from '@angular/core';
import { EXPERIENCE } from '../../data/experience.data';
import { LanguageService } from '../../i18n/language.service';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  private readonly language = inject(LanguageService);
  protected readonly t = this.language.t;

  protected readonly entries = computed(() =>
    EXPERIENCE.map((entry) => ({
      ...entry,
      role: entry.role[this.language.lang()],
      location: entry.location[this.language.lang()],
      highlights: entry.highlights.map((h) => h[this.language.lang()]),
    })),
  );
}
