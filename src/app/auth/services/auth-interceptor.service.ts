import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { PersistenceService } from "src/app/shared/services/persistence.service";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private _persistenceService: PersistenceService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this._persistenceService.get('accessToken');

    req = req.clone({
      setHeaders: {
        Authorization: token ? `Token ${token}` : ''
      }
    })

    return next.handle(req);
  }
}