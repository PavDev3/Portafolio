import { Component } from '@angular/core';
import { EDUCATION, EducationEntry } from '../../data/experience.data';

@Component({
  imports: [],
  selector: 'app-about',
  styleUrl: './about.css',
  templateUrl: './about.html',
})
export class About {
  protected readonly education: EducationEntry[] = EDUCATION;
}
