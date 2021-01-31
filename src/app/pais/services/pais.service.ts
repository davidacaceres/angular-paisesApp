import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  get httpparams(){
    return new HttpParams().set('fields', 'name;capital;alpha2Code;flag;population');

  }

  //https://restcountries.eu/rest/v2/name/costa

  constructor(private http: HttpClient) { }

  buscarPais(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpparams});
  }


  buscarCapital(termino: string): Observable<Country[]> {
    const url = `${this.apiUrl}/capital/${termino}`;
    return this.http.get<Country[]>(url,{params:this.httpparams});
  }

  buscarRegion(region: string): Observable<Country[]> {

    const url = `${this.apiUrl}/region/${region}`;
    return this.http.get<Country[]>(url,{params:this.httpparams});
  }

  getPaisPorAlpha(id: string): Observable<Country> {
    const url = `${this.apiUrl}/alpha/${id}`;
    return this.http.get<Country>(url);
  }
}
