import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap, tap } from "rxjs";
import { CurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { PersistenceService } from "src/app/shared/services/persistence.service";
import { AuthService } from "../services/auth.service";
import { loginAction, loginFailureAction, loginSuccessAction, registerAction, registerFailureAction, registerSuccessAction } from "./auth.actions";

@Injectable()
export class AuthEffects {
  register$ = createEffect(() => this._actions$.pipe(
    ofType(registerAction),
    switchMap(({ request }) => {
      return this._authService.register(request).pipe(
        map((currentUser: CurrentUser) => {
          this._persistanceService.set('accessToken', currentUser.token);
          return registerSuccessAction({ currentUser });
        }),
        catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ errors: errorResponse.error.errors}))
          }
        )
      )
    })
  ))

  login$ = createEffect(() => this._actions$.pipe(
    ofType(loginAction),
    switchMap(({ request }) => {
      return this._authService.login(request).pipe(
        map((currentUser: CurrentUser) => {
          this._persistanceService.set('accessToken', currentUser.token);
          return loginSuccessAction({ currentUser });
        }),
        catchError((errorResponse: HttpErrorResponse) => {
          return of(loginFailureAction({ errors: errorResponse.error.errors }));
        })
      )
    })
  ))

  redirectAfterSubmit$ = createEffect(() => {
      return this._actions$.pipe(
        ofType(...[registerSuccessAction, loginSuccessAction]),
        tap(() => this._router.navigateByUrl('/'))
      )
    },
    { dispatch: false }
  )

  constructor(
    private _actions$: Actions, 
    private _authService: AuthService,
    private _persistanceService: PersistenceService,
    private _router: Router,
  ) {}
}