import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavorisService {
env=environment
  constructor(private http: HttpClient) { }

  AfficherFavorisUsers(idusers: any):Observable<any>{
   return this.http.get(`${this.env.api}/citation/readfav/${idusers}`)
  }
}
