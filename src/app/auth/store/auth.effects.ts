import { HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import { CurrentUser } from "src/app/shared/interfaces/current-user.interface";
import { AuthService } from "../services/auth.service";
import { registerAction, registerFailureAction, registerSuccessAction } from "./auth.actions";

@Injectable()
export class AuthEffects {
  register$ = createEffect(() => this._actions$.pipe(
    ofType(registerAction),
    switchMap(({ request }) => {
      return this._authService.register(request).pipe(
        map((currentUser: CurrentUser) => {
          return registerSuccessAction({ currentUser });
        }),
        catchError((errorResponse: HttpErrorResponse) => {
            return of(registerFailureAction({ errors: errorResponse.error.errors}))
          }
        )
      )
    })
  ))

  constructor(private _actions$: Actions, private _authService: AuthService) {}
}