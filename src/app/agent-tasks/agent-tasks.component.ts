import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgentTaskService } from '../services/agent-task.service'; // Adjust path if necessary
import { AgentTask } from '../services/agent-task.model'; // Assuming AgentTask model is defined in a separate model file

@Component({
  selector: 'app-agent-tasks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './agent-tasks.component.html',
  styleUrls: ['./agent-tasks.component.css']
})
export class AgentTasksComponent implements OnInit {
  agentTasks: AgentTask[] = [];
  errorMessage: string = '';

  constructor(private agentTaskService: AgentTaskService) { }

  ngOnInit(): void {
    this.getAgentTasks();
  }

  getAgentTasks(): void {
    this.agentTaskService.getAgentTasks().subscribe({
      next: agentTasks => {
        this.agentTasks = agentTasks;
        console.log('Agent tasks fetched:', this.agentTasks);
      },
      error: err => {
        this.errorMessage = err;
        console.error('Error fetching agent tasks:', err);
      }
    });
  }
}
