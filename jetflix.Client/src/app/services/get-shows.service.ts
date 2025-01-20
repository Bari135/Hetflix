import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
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
        return this.http.get<Show[]>(`${this.showsEndpoint}${show}`);
    }

    getEpisodes(id: number): Observable<any> {
        return this.http.get<Episode[]>(`${this.episodesEndpoint}${id}`);
    }
}