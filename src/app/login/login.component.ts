import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loginSuccess } from '../auth.actions';
import { AuthState } from '../auth.state'; 
import { BehaviorSubject } from 'rxjs';
import { AuthServiceComponent } from '../auth-service/auth-service.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData: any = {}; // Object to store the form data

  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  constructor(private http: HttpClient, 
    private sweetAlertService: SweetAlertService,
    private headerComponent: HeaderComponent, 
    private router: Router,
    private store: Store,
    private authService: AuthServiceComponent) { }

  onLoginSubmit():void {
    //console.log('Login form submitted:', this.formData);

    this.http.post(API_URLS.LOAD_LOGIN_USER, this.formData).subscribe((response: any) => {

      const _length = Object.entries(response).length;

      if(_length > 0)
      {
        const seccessData = response;
        console.log('Login Success:',seccessData);
        localStorage.setItem('loginDetails', JSON.stringify(seccessData));
        
        this.authService.setLoggedIn(true);
        this.router.navigate(['/dashboard']);
      }      
    });
    
  }
}
