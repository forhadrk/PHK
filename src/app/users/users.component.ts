import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  isLoggedIn = false;

  dataSource: any[] = [];
  formData = {
    loginUserID: 0,
    name: '',
    email: '',
    userName: '',
    password: '',
    active: false,
  };
  isSaving = false;
  saveSuccess = false;
  showModal = false;
  saveUpdate: string = "Save";
  modalTitle: string = "User Info";

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(API_URLS.Users_Get_All_Data).subscribe((response: any) => {
      this.dataSource = response;
      console.log(this.dataSource);
    });
  }

  onSubmit(form: NgForm) {
    //console.log(this.formData);
    if (!form.invalid) {
      this.isSaving = true;
      this.http.post(API_URLS.Users_Save_Update_Data, this.formData)
        .subscribe(
          () => {
            this.sweetAlertService.showSuccessPopupAlert('Data Process Successfully!');
            this.isSaving = false;
            this.loadData();
            this.showModal = false;
            this.resetForm();
          },
          (error) => {

            this.sweetAlertService.showErrorAlert('Something went wrong!');
            console.log(error);
            this.isSaving = false;
          }
        );
    }
  }

  GetEditData(data: any) {
    this.formData.loginUserID = data.loginUserID;
    this.http.post(API_URLS.Users_Get_Edit_Data, this.formData).subscribe((response: any) => {
      //console.log(response);
      this.formData.name = response[0].name;
      this.formData.email = response[0].email;
      this.formData.userName = response[0].userName;
      this.formData.password = response[0].password;
      this.formData.active = response[0].active;

      this.saveUpdate = "Update";
      this.showModal = !this.showModal;
    });
  }


  DeleteRowData(data: any) {
    this.formData.loginUserID = data.loginUserID;
    this.sweetAlertService.showConfirmDeleteAlert('You won\'t be able to revert this!').then((result) => {
      if (result.isConfirmed) {
        this.http.post(API_URLS.Users_Delete_Selected_Data, this.formData).subscribe((response: any) => {
          console.log(response);
          this.loadData();
          this.sweetAlertService.showSuccessPopupAlert('Your item has been deleted');
        },
          (error) => {
            console.log(error);
            this.sweetAlertService.showErrorAlert('Your item deleted failed:)');
          }
        );
      }
    });
  }

  resetForm() {
    this.formData = {
      loginUserID: 0,
      name: '',
      email: '',
      userName: '',
      password: '',
      active: false,
    };
    this.saveUpdate = "Save";
  }

  toggleModal() {
    this.resetForm();
    this.showModal = !this.showModal;
  }
}
