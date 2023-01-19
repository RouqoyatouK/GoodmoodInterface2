import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PriorityService {
env=environment
  constructor(private http: HttpClient) { }


  //Afficher toute les priority
  AfficherPriority(): Observable<any>{
    return this.http.get(`${this.env.api}/priority/read`);
  }
}
