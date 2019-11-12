import { createAction, props } from '@ngrx/store';

export const authLogin = createAction(
  '[Auth] Login',
  props<{ username: string; password: string }>()
);
export const authLoginSuccess = createAction(
  '[Auth] Login Success',
  props<{ user: any }>()
);
export const authLoginFailure = createAction(
  '[Auth] Login Failure',
  props<{ error: any }>()
);
export const authLogout = createAction('[Auth] Logout');
