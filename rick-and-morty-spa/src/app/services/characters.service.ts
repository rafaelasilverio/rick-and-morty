import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  private readonly API = 'https://rickandmortyapi.com/api/character';

  constructor(private httpClient: HttpClient) { }

  getCharacters(page: number){
    let params = new HttpParams().set("page", page);

    return this.httpClient.get<Character[]>(this.API, { params });
  }

  getCharacterDetails(id: number): Observable<Character> {
    return this.httpClient.get<Character>(`${this.API}/${id}`);
  }
}
