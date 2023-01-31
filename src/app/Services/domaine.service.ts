import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomaineService {

  env= environment

  constructor(private http: HttpClient) { }

  AjouterDomaine(nomdomaine: String, idusers: any , file: File ): Observable<any>{
    const data: FormData = new FormData();

    const domaine = [{
      "nomdomaine": nomdomaine,
      
      // "superfie": superfie,
      // "coderegion": coderegion,
      // "activite": activite,
      //"imgregion": "",

    }]
    data.append('file', file)
    data.append('domaine', JSON.stringify(domaine).slice(1, JSON.stringify(domaine).lastIndexOf(']')))
    return this.http.post(`${this.env.api}/domaine/add/${idusers}`, data);

  }

  //Afficher tout les domaine

AfficherToutlesdomaines(): Observable<any>{
 return this.http.get(`${this.env.api}/domaine/read`)
}

}
