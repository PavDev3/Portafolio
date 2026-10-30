import { Component } from '@angular/core';
import { PROJECTS, Project } from '../../data/projects.data';

@Component({
  imports: [],
  selector: 'app-projects',
  styleUrl: './projects.css',
  templateUrl: './projects.html',
})
export class Projects {
  protected readonly projects: Project[] = PROJECTS;
}
