import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

// Assuming Metric model is defined in a separate file or inline
// For now, let's define it here for completeness
interface Metric {
  id: string;
  name: string;
  value: number;
  unit: string;
  timestamp: string; // Assuming timestamp comes as string from API, will need parsing
}

@Injectable({
  providedIn: 'root'
})
export class MetricService {
  // Adjusted URL to use Docker Compose service name
  private apiUrl = 'http://backend:8080/api/metrics';

  constructor(private http: HttpClient) { }

  getMetrics(): Observable<Metric[]> {
    return this.http.get<Metric[]>(this.apiUrl).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data))),
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
