// auth.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { loginSuccess, logout } from './auth.actions';

export interface AuthState {
  isLoggedIn: boolean;
  loginUserID: string | null;
  userName: string | null;
  name: string | null;
  email: string | null;
  token: string | null;
}

export const initialState: AuthState = {
  isLoggedIn: false,
  loginUserID: null,
  userName: null,
  name: null,
  email: null,
  token: null,
};

export const authReducer = createReducer(    
  initialState,
  on(loginSuccess, (state, { loginUserID, userName, name, email, token }) => ({
    ...state,
    isLoggedIn: true,
    loginUserID,
    userName,
    name,
    email,
    token,
  })),
  on(logout, () => initialState)

  
);
