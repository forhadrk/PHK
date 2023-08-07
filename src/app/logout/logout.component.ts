import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthState } from '../auth.state';
import { Store } from '@ngrx/store';
import { logout } from '../auth.actions';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  isLoggedIn = false;
  loginUserID: string | null = null;
  userName: string | null = null;
  name: string | null = null;
  email: string | null = null;
  token: string | null = null;

  constructor(private router: Router, private store: Store<{ auth: AuthState }>) {
    this.store.select('auth').subscribe((state) => {
      this.loginUserID = state.loginUserID;
      this.userName = state.userName;
      this.name = state.name;
      this.email = state.email;
      this.token = state.token;
    });
  }

  //constructor(private router: Router) { }

  ngOnInit() {
    //const userDataString = localStorage.getItem('userData');

    // if (userDataString) {
    //   const keyToRemove = 'userData';
    //   localStorage.removeItem(keyToRemove);
    // }   

    this.router.navigate(['/']);
    //localStorage.clear(); // Remove all localStorage
  }

  onLogout(): void {
    this.store.dispatch(logout());
  }

}
