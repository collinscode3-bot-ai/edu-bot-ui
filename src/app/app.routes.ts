import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MetricsComponent } from './metrics/metrics.component';
import { ProjectsComponent } from './projects/projects.component';
import { AgentTasksComponent } from './agent-tasks/agent-tasks.component';

export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'metrics', component: MetricsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'agent-tasks', component: AgentTasksComponent }
];
