import { Component, computed, inject } from '@angular/core';
import { SKILLS } from '../../data/skills.data';
import { LanguageService } from '../../i18n/language.service';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  private readonly language = inject(LanguageService);

  protected readonly skillGroups = computed(() =>
    SKILLS.map((group) => ({
      category: group.category[this.language.lang()],
      items: group.items.map((item) => item[this.language.lang()]),
    })),
  );
}
