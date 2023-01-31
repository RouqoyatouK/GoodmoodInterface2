import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChoixdomaineService {

  env= environment

  constructor(private http: HttpClient) { }

  AjouterDomainPourUse(listDomaines:any, userid:any): Observable<any>{
    const data: FormData = new FormData();
    console.log(listDomaines);
    data.append("listDomaines", listDomaines);
    return this.http.post(`${this.env.api}/domaine/adduser/${listDomaines}/${userid}`, null);
  }


}
