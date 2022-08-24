import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  /* private apiiURL: string = 'https://restcountries.com/v2'; */
  private apiURL: string = 'https://restcountries.com/v3.1';

  constructor( private http: HttpClient ) { }

  buscarPais( termino: string ): Observable<Country[]> {

    const url = `${ this.apiURL }/name/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  buscarCapital( termino: string ): Observable<Country[]> {
    
    const url = `${ this.apiURL }/capital/${ termino }`;
    return this.http.get<Country[]>( url );
  }

  getPaisPorId( CtyId: string ): Observable<Country[]> {
    
    const url = `${ this.apiURL }/alpha/${ CtyId }`;
    return this.http.get<Country[]>( url );
  }

  buscarRegion( region: string ): Observable<Country[]> {
    const url = `${ this.apiURL }/region/${ region }`;
    return this.http.get<Country[]>( url );
  } 


}
