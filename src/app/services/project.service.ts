import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface Project {
  id: string;
  name: string;
  description: string;
  startDate: string; // Assuming LocalDate comes as string from API
  endDate: string;   // Assuming LocalDate comes as string from API
  status: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  // Adjusted URL to use Docker Compose service name
  private apiUrl = 'http://backend:8080/api/projects';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Project[]> {
    return this.http.get<Project[]>(this.apiUrl).pipe(
      tap(data => console.log('All Projects: ' + JSON.stringify(data))),
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
