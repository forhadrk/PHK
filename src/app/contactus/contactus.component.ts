import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

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

  formReviewData = {
    name: '',
    message: ''
  };

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {

  }

  onSubmit(form: NgForm) {
    if (!form.invalid) {
      this.http.post(API_URLS.Contact_Save_Update_Data, this.formData)
        .subscribe(
          () => {
            this.sweetAlertService.showSuccessPopupAlert('Data Process Successfully..!');
            this.resetForm();
          },
          (error) => {
            this.sweetAlertService.showErrorAlert('Something went wrong!');
            console.log(error);
          }
        );
    }
  }
  onReviewSubmit(form: NgForm) {
    console.log(this.formReviewData);
    if (!form.invalid) {
      this.http.post(API_URLS.Save_User_Comments, this.formReviewData)
        .subscribe(
          () => {
            this.sweetAlertService.showSuccessPopupAlert('Your Comments Save Successfully!');
            this.formReviewData.name = "";
            this.formReviewData.message = "";
          },
          (error) => {
            this.sweetAlertService.showErrorAlert('Something went wrong!');
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
