import { Component } from '@angular/core';
import { SKILLS, SkillGroup } from '../../data/skills.data';

@Component({
  imports: [],
  selector: 'app-skills',
  styleUrl: './skills.css',
  templateUrl: './skills.html',
})
export class Skills {
  protected readonly skillGroups: SkillGroup[] = SKILLS;
}
