import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';
import { HeaderComponent } from '../header/header.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  formData: any = {}; // Object to store the form data

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService,private headerComponent: HeaderComponent, private router: Router) { }

  onLoginSubmit() {
    // You can perform any login API call here using the formData
    console.log('Login form submitted:', this.formData);

    this.http.post(API_URLS.LOAD_LOGIN_USER, this.formData).subscribe((response: any) => {

      const _length = Object.entries(response).length;

      if(_length > 0)
      {
        const userData = response;
        console.log(userData);
        localStorage.setItem('userData', JSON.stringify(userData));

        this.headerComponent.ngOnInit();

        this.router.navigate(['/dashboard']);
      }      
    });
    
  }
}
