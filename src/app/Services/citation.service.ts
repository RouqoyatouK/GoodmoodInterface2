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

  //Afficher Citation d'un users
  AfficherLesCitationDunUser(idusers: any): Observable<any>{
    return this.http.get(`${this.env.api}/citation/read/${idusers}`)
  }


  AjouterCitation(file: File, iddomaine: any, ecrivain: any , contenu: any ): Observable<any>{
    const data: FormData = new FormData();

    const citation = [{
      "ecrivain": ecrivain,
      "contenu": contenu,
      
      // "superfie": superfie,
      // "coderegion": coderegion,
      // "activite": activite,
      //"imgregion": "",

    }]
    data.append('file', file)
    data.append('citation', JSON.stringify(citation).slice(1, JSON.stringify(citation).lastIndexOf(']')))
    return this.http.post(`${this.env.api}/citation/add/${iddomaine}`, data);

  }


  //Ajouter Favoris
  AjouterFavoris(idcitation: any, idusers: any): Observable<any>{
    return this.http.post(`${this.env.api}/citation/addfavoris/${idcitation}/${idusers}`, null)
  }
}
