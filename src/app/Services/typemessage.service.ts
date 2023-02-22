import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypemessageService {
  env= environment

  constructor(private http: HttpClient) { }

  //Afficher les type message
  //Afficher tout les tache d'un planning

  AfficherTypeMessage():Observable<any>{  
    return this.http.get(`${this.env.api}/typemessage/read`)
  
  }
}
