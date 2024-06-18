import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Episode } from '../interfaces/episode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EpisodesService {

  private readonly API = 'https://rickandmortyapi.com/api/episode';

  constructor(private httpClient: HttpClient) {

  }

  getEpisodes(page: number) {

    let params = new HttpParams().set("page", page);

    return this.httpClient.get<Episode[]>(this.API, { params });
  }

  getEpisodeDetails(id: number): Observable<Episode> {
    return this.httpClient.get<Episode>(`${this.API}/${id}`);
  }

}
