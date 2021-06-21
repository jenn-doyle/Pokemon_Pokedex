import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private url: string = environment.apiUrl + 'pokemon';

  constructor(private http: HttpClient) {
  }

  getPokemons(): Observable<any> {
    const url = `${this.url}?page=1&limit=300`;
    return this.http.get<any>(url);
  }

  getMorePoke(name: string): Observable<any> {
    const url = `${this.url}/${name}`;
    return this.http.get<any>(url);
  }

}
