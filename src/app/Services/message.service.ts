import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  env= environment
  constructor(private http: HttpClient) { }

   //Ajouter une nouvelle tache  http://localhost:8082/message/add/4/1

   AjouterUneTacheAUnPanning(idusers: any, idtypemessage: any, cotenumessage: any ):Observable<any>{

    const addwrite = {
      "cotenumessage": cotenumessage, 
     
    }

    return this.http.post(`${this.env.api}/message/add/${idusers}/${idtypemessage}`, addwrite)}
}
