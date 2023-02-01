import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CitationService {
  env= environment

  constructor(private http: HttpClient) { }

  AfficherLesCitationDunUser(idusers: any): Observable<any>{
    return this.http.get(`${this.env.api}/citation/read/${idusers}`)
  }
}
