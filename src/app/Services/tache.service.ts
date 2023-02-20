import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TacheService {

  env=environment

  constructor(private http: HttpClient) { }

  //Afficher tout les tache d'un planning

  AfficherTacheDunPlanning(idplanning: any):Observable<any>{
    return this.http.get(`${this.env.api}/tache/read/${idplanning}`)
  }

  //Ajouter une nouvelle tache

  AjouterUneTacheAUnPanning(designation: any, date: Date, completed: boolean,  id: any, nomtypetache: any, nompriority: any): Observable<any>{

    const addtache = {
      "designation": designation,
      "date": date
    }

    return this.http.post(`${this.env.api}/tache/add/${id}/${nomtypetache}/${nompriority}`, addtache)}


    //Tache Complet
    TacheComplet(idtache: any): Observable<any>{
     const completTache= { }
      return this.http.put(`${this.env.api}/tache/complet/${idtache}`, completTache)
    }

    //Supprimer une tache 
    Supprimertache(idplanning: any , idtache: any): Observable<any>{
      return this.http.delete(`${this.env.api}/delete/${idplanning}/${idtache}`)
    }


}
