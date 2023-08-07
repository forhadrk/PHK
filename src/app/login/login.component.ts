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

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData: any = {}; // Object to store the form data

  constructor(private http: HttpClient, 
    private sweetAlertService: SweetAlertService,
    private headerComponent: HeaderComponent, 
    private router: Router,
    private store: Store) { }

  onLoginSubmit():void {
    // You can perform any login API call here using the formData
    console.log('Login form submitted:', this.formData);

    this.http.post(API_URLS.LOAD_LOGIN_USER, this.formData).subscribe((response: any) => {

      const _length = Object.entries(response).length;

      if(_length > 0)
      {
        const seccessData = response;
        console.log(seccessData);
        //localStorage.setItem('userData', JSON.stringify(seccessData));

        //this.headerComponent.ngOnInit();

        // const userData = {
        //   loginUserID: seccessData.loginUserID,
        //   userName: seccessData.userName,
        //   name: seccessData.name,
        //   email: seccessData.userName,
        //   token: seccessData.userName,
        // };

        const userData = {
          loginUserID: 'user_id_here',
          userName: 'example_user',
          name: 'John Doe',
          email: 'user@example.com',
          token: 'your_generated_jwt_token_here',
        };

        console.log(userData);
        this.store.dispatch(loginSuccess(userData));
        //this.store.dispatch(new loginSuccess(userData));

        //this.router.navigate(['/dashboard']);
      }      
    });
    
  }
}
