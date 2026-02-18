import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../services/project.service'; // Adjust path if necessary
import { Project } from '../services/project.model'; // Assuming Project model is defined in a separate model file

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];
  errorMessage: string = '';

  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects(): void {
    this.projectService.getProjects().subscribe({
      next: projects => {
        this.projects = projects;
        console.log('Projects fetched:', this.projects);
      },
      error: err => {
        this.errorMessage = err;
        console.error('Error fetching projects:', err);
      }
    });
  }
}
