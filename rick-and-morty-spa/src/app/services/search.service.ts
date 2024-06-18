import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly API = 'https://rickandmortyapi.com/api/';

  constructor(private httpClient: HttpClient) {}

  searchCharacters(query: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API}character/?name=${query}`);
  }

  searchEpisodes(query: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API}episode/?name=${query}`);
  }
}
