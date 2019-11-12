import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ofType, createEffect, Actions } from '@ngrx/effects';
import { tap, map, mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';

import {
  authLogin,
  authLogout,
  authLoginSuccess,
  authLoginFailure
} from './auth.actions';
import { PmisService } from '../services/pmis.service';

export const AUTH_KEY = 'AUTH';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private localStorageService: LocalStorageService,
    private router: Router,
    private pmisService: PmisService
  ) {}

  login = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogin),
        mergeMap((auth: any) =>
          this.pmisService.login(auth.username, auth.password).pipe(
            map((user: any) => authLoginSuccess({ user })),
            catchError(error => of(authLoginFailure({ error })))
          )
        )
      ),
    {}
  );

  loginSuccess = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLoginSuccess),
        tap(data => {
          this.router.navigate(['']);
          this.localStorageService.setItem(AUTH_KEY, {
            isAuthenticated: true,
            user: data.user
          });
        })
      ),
    { dispatch: false }
  );

  logout = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLogout),
        tap(() => {
          this.router.navigate(['']);
          this.localStorageService.setItem(AUTH_KEY, {
            isAuthenticated: false,
            user: {}
          });
        })
      ),
    { dispatch: false }
  );

  loginFailure = createEffect(
    () =>
      this.actions$.pipe(
        ofType(authLoginFailure),
        tap(() => {
          this.localStorageService.setItem(AUTH_KEY, {
            isAuthenticated: false,
            user: {}
          });
        })
      ),
    { dispatch: false }
  );
}
