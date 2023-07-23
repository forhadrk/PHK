import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {  
  formData = {
    contactID: 0,
    firstName: '',
    email: '',
    mobileNumber: '',
    suburb: '',
    city: '',
    subject: '',
    message: ''
  };

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    console.log(this.formData);
    if (!form.invalid) {
      this.http.post(API_URLS.Contact_Save_Update_Data, this.formData)
        .subscribe(
          () => {
            Swal.fire(
              'Good job!',
              'Data Process Successfully!',
              'success'
            );
            this.resetForm();
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: ''
            })
            console.log(error);
          }
        );
    }
  }
  resetForm() {
    this.formData = {
      contactID: 0,
      firstName: '',
      email: '',
      mobileNumber: '',
      suburb: '',
      city: '',
      subject: '',
      message: ''
    };
  }

}
