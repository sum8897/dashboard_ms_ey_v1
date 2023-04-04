import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { from, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private readonly _router: Router, private readonly _http: HttpClient) { }

  isUserLoggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }

  logout(): void {
    localStorage.clear();
    this._router.navigate(['/login']);
  }

  login(inputData: any): any {
    try {
      let payload = `client_id=${environment.keycloakClient}&client_secret=${environment.keycloakSecret}&grant_type=password&username=${inputData.username}&password=${inputData.password}`
      let headers = {
        'Content-Type': 'application/x-www-form-urlencoded',
      };
      const URL = `${environment.keycloakUrl}/realms/${environment.keycloakRealm}/protocol/openid-connect/token`;
      return this._http.post(URL, payload, { headers: headers });      

    } catch (error) {
      console.log('keyClock.impl.service', error.message);
    }
  }
}
