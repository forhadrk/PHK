// auth.effects.ts
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { loginSuccess, logout } from './auth.actions';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions, private router: Router) {}

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccess),
        tap(() => {
          // Redirect to home or any other route after successful login
          this.router.navigate(['/dashboard']);
        })
      ),
    { dispatch: false } // Set to false to prevent dispatching any additional actions
  );

  // loginSuccess$ = createEffect(() => {
  //   return this.actions$.pipe(
  //     ofType(loginSuccess),
  //     exhaustMap((action) => {
  //       return this.authService.login(action.email, action.password).pipe(
  //         map((data) => {
  //           this.store.dispatch(setLoadingSpinner({ status: false }));
  //           this.store.dispatch(setErrorMessage({ message: '' }));
  //           const user = this.authService.formatUser(data);
  //           this.authService.setUserInLocalStorage(user);
  //           return loginSuccess({ user, redirect: true });
  //         }),
  //         catchError((errResp) => {
  //           this.store.dispatch(setLoadingSpinner({ status: false }));
  //           const errorMessage = this.authService.getErrorMessage(
  //             errResp.error.error.message
  //           );
  //           return of(setErrorMessage({ message: errorMessage }));
  //         })
  //       );
  //     })
  //   );
  // });


  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logout),
        tap(() => {
          // Redirect to login or any other route after logout
          this.router.navigate(['/login']);
        })
      ),
    { dispatch: false } // Set to false to prevent dispatching any additional actions
  );
}
