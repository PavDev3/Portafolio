import { Component, computed, inject } from '@angular/core';
import { PROJECTS } from '../../data/projects.data';
import { LanguageService } from '../../i18n/language.service';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  private readonly language = inject(LanguageService);

  protected readonly projects = computed(() =>
    PROJECTS.map((project) => ({
      ...project,
      tag: project.tag[this.language.lang()],
      description: project.description[this.language.lang()],
      stack: project.stack.map((s) => s[this.language.lang()]),
    })),
  );
}
