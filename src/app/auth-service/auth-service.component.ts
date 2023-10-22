import { Component, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-auth-service',
  templateUrl: './auth-service.component.html',
  styleUrls: ['./auth-service.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class AuthServiceComponent {
  // private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  // isLoggedIn$ = this.isLoggedInSubject.asObservable();
  isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  setLoggedIn(value: boolean) {
    //this.isLoggedInSubject$.next(value);
    this.isLoggedIn$.next(true);
  }
}
