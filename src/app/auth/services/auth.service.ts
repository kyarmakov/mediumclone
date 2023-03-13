import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { CurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { environment } from "src/environments/environment";
import { AuthResponse } from "../interfaces/auth-response.interface";
import { LoginRequest } from "../interfaces/login-request.interface";
import { RegisterRequest } from "../interfaces/register-request.interface";

@Injectable()
export class AuthService {
  constructor(private _http: HttpClient) {}

  register(request: RegisterRequest): Observable<CurrentUser> {
    const fullUrl = environment.apiUrl + '/users';
    return this._http.post<AuthResponse>(fullUrl, request).pipe(
      map(this._getUser)
    )
  }

  login(request: LoginRequest): Observable<CurrentUser> {
    const fullUrl = environment.apiUrl + '/users/login';
    return this._http.post<AuthResponse>(fullUrl, request).pipe(
      map(this._getUser)
    )
  }

  private _getUser(response: AuthResponse): CurrentUser {
    return response.user;
  }
}