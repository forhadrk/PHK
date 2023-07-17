import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {
  dataSource: any[] = [];
  saveUpdate: string = "Save";
  modalTitle: string = "Contact Info";

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

  isSaving = false;
  showModal = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(API_URLS.Contact_Get_All_Data).subscribe((response: any) => {
      this.dataSource = response;
      //console.log(this.dataSource);
    });
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
            this.isSaving = false;
            this.loadData();
            this.showModal = false;
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

    this.saveUpdate = "Save";
  }

  toggleModal() {
    this.resetForm();
    this.showModal = !this.showModal;
  }

  GetEditData(data: any) {
    //console.log(data);
    var _ID = data.contactID;
    this.formData.contactID = _ID;
    this.http.post(API_URLS.Contact_Get_Edit_Data, this.formData).subscribe((response: any) => {
      //console.log(response);
      this.formData.firstName = response[0].firstName;
      this.formData.email = response[0].email;
      this.formData.mobileNumber = response[0].mobileNumber;
      this.formData.suburb = response[0].suburb;
      this.formData.city = response[0].city;
      this.formData.subject = response[0].subject;
      this.formData.message = response[0].message;

      this.saveUpdate = "Update";
      this.showModal = !this.showModal;
    });
  }


  DeleteRowData(data: any) {
    var _ID = data.contactID;
    this.formData.contactID = _ID;

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.post(API_URLS.Contact_Delete_Selected_Data, this.formData).subscribe((response: any) => {
          console.log(response);
          this.loadData();
          Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        },
          (error) => {
            console.log(error);
            Swal.fire('Deleted', 'Your item deleted failed:)', 'info');
          }
        );
      }
    });
  }
}
