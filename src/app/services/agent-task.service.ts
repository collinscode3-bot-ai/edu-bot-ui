import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface AgentTask {
  id: string;
  description: string;
  assignedTo: string;
  dueDate: string; // Assuming LocalDateTime comes as string from API
  status: string;
  priority: string;
}

@Injectable({
  providedIn: 'root'
})
export class AgentTaskService {
  // Adjusted URL to use Docker Compose service name
  private apiUrl = 'http://backend:8080/api/agent-tasks';

  constructor(private http: HttpClient) { }

  getAgentTasks(): Observable<AgentTask[]> {
    return this.http.get<AgentTask[]>(this.apiUrl).pipe(
      tap(data => console.log('All Agent Tasks: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(`Backend returned code ${error.status}, body was: ${error.error}`);
    }
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
