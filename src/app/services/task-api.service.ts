import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskApiService {
  private apiUrl = 'https://dummyjson.com/todos';
  private cachedTodos: any[] | null = null;

  constructor(private http: HttpClient) {}

  getDummyData(): Observable<any> {
    if (this.cachedTodos) {
      return of(this.cachedTodos); // Serve from memory cache
    }

    return this.http.get(this.apiUrl).pipe(
      map((res: any) => res.todos),
      tap((todos) => (this.cachedTodos = todos)),
    );
  }
}
