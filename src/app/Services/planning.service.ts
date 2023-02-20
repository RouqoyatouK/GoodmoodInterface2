import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlanningService {

  env= environment;

  constructor(private http: HttpClient) { }

  //Ajouter un new planning
  AjouterPlanning(nomplanning: String, datedebut: Date, datefin: Date, idusers:any):Observable<any>{
    const data: FormData = new FormData();
    const planing = {
      "nomplanning": nomplanning,
     // "idusers": "idusers"
     "datedebut": datedebut,
     "datefin": datefin,

    }
    return this.http.post(`${this.env.api}/planning/add/${idusers}`, planing)
  }


  //Afficher planning d'un user

  AfficherPlaningDunUser(idusers:any):Observable<any>{
    return this.http.get(`${this.env.api}/planning/read/${idusers}`)
  }

  //Supprimer planning d'un users
  Supprimerplanning(idplaning: any): Observable<any>{
    return this.http.delete(`${this.env.api}/planning/delete/${idplaning}`)
  }
}
