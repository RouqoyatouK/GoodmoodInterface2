import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


const API_URL = 'http://localhost:8082/api/test/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  env= environment

  constructor(private http: HttpClient,

    ) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  // getModeratorBoard(): Observable<any> {
  //   return this.http.get(API_URL + 'mod', { responseType: 'text' });
  // }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }


  //Obtenir un user de par son id 

  AfficherUsersparid(idusers: any):Observable<any>{
    return this.http.get(`${this.env.api}/api/auth/usersid/${idusers}`)
  }
}
