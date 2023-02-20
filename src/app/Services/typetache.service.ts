import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TypetacheService {
  env= environment

  constructor(private http: HttpClient) { }


  //Afficher toute les tache d'un utilisateur
  AfficherTypeTAcheUnUser(idusers: any): Observable<any>{
   return this.http.get(`${this.env.api}/typetache/read/${idusers}`);
  }

  //Ajouter type tache pour un user
  AjouterTypeTAcheUnUser(idusers: any, nomtypetache: any): Observable<any>{
    const typetache= {

      "nomtypetache": nomtypetache,
    }

    return this.http.post(`${this.env.api}/typetache/add/${idusers}`, typetache)

  }
}
