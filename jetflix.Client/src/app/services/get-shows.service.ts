import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Show } from '../models/show.model';
import { Episode } from '../models/episode.model';

@Injectable({
    providedIn: 'root'
})
export class GetShowsService {
    private baseUrl = 'https://localhost:7106'; 
    private showsEndpoint = `${this.baseUrl}/api/shows/search?query=`;
    private episodesEndpoint = `${this.baseUrl}/api/episodes?id=`;


    constructor(private http: HttpClient) { }

    getShows(show: string): Observable<any> {
        return this.http.get<Show[]>(`${this.showsEndpoint}${show}`).pipe(
            catchError(this.handleError)
        );;
    }

    getEpisodes(id: number): Observable<any> {
        return this.http.get<Episode[]>(`${this.episodesEndpoint}${id}`).pipe(
            catchError(this.handleError)
        );
    }

    private handleError(error: HttpErrorResponse) {
        let errorMessage = 'An unknown error occurred!';
        if (error.error instanceof ErrorEvent) {
            errorMessage = `A client-side error occurred: ${error.error.message}`;
        } else {
            errorMessage = `Server returned code: ${error.status}, error message is: ${error.message}`;
        }
        console.error(errorMessage);
        return throwError(() => new Error(errorMessage));
    }
}