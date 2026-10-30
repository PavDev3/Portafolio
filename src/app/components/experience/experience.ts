import { Component } from '@angular/core';
import { EXPERIENCE, ExperienceEntry } from '../../data/experience.data';

@Component({
  imports: [],
  selector: 'app-experience',
  styleUrl: './experience.css',
  templateUrl: './experience.html',
})
export class Experience {
  protected readonly entries: ExperienceEntry[] = EXPERIENCE;
}
