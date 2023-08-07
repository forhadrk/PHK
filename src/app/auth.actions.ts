import { createAction, props } from '@ngrx/store';

export const loginSuccess = createAction(
  '[Auth] Login Success',
  props<{loginUserID: string; userName: string;name: string; email: string; token: string }>()
);
export const logout = createAction('[Auth] Logout');
