import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';
import { AuthState } from '../auth.state';
import { Store } from '@ngrx/store';
import { logout } from '../auth.actions';

@Component({
  selector: 'app-save-services',
  templateUrl: './save-services.component.html',
  styleUrls: ['./save-services.component.css']
})
export class SaveServicesComponent implements OnInit {
  loginDetails: any;
  isLoggedIn = false;
  token: string | null = null;

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService,
    private store: Store<{ auth: AuthState }>) {
      this.store.select('auth').subscribe((state) => {
        console.log(state.email);
      });

      const storedLoginDetails = localStorage.getItem('loginDetails');

      if (storedLoginDetails) {
        this.loginDetails = JSON.parse(storedLoginDetails);
        this.token  = this.loginDetails.token;
        console.log("Login Storage: ",this.loginDetails);
        console.log("Token: ", this.token);
      }
  }

  dataSource: any[] = [];
    formData = {      
      servicesID:0,
      serviceName: '',
      serviceInfo: '',
      active : false,
    };
    isSaving = false;
    saveSuccess = false;
    showModal = false;
    saveUpdate: string = "Save";
    modalTitle: string = "Service Category";
  
    //constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) {}

    ngOnInit() {
      console.log('Token Data: ' + this.token);
      this.loadData();
    }

    loadData() {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });
      this.http.get(API_URLS.Service_Name_Get_All_Data, { headers }).subscribe((response: any) => {       
        this.dataSource = response;
        console.log(this.dataSource);
      });
    }
  
    onSubmit(form: NgForm) {
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${this.token}`
      });

      if (!form.invalid) {
      this.isSaving = true;
      this.http.post(API_URLS.Service_Name_Save_Update_Data, this.formData, { headers })
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
      this.formData.servicesID = data.servicesID;
      this.http.post(API_URLS.Service_Name_Get_Edit_Data, this.formData).subscribe((response: any) => {
        console.log(response);
        this.formData.serviceName = response[0].serviceName;
        this.formData.serviceInfo = response[0].serviceInfo;
        this.formData.active = response[0].active;
  
        this.saveUpdate = "Update";
        this.showModal = !this.showModal;
      });
    }
  
  
    DeleteRowData(data: any) {
      this.formData.servicesID =  data.servicesID;
      this.sweetAlertService.showConfirmDeleteAlert('You won\'t be able to revert this!').then((result) => {
        if (result.isConfirmed) {
          this.http.post(API_URLS.Service_Name_Delete_Selected_Data, this.formData).subscribe((response: any) => {
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
        servicesID:0,
        serviceName: '',
        serviceInfo: '',
        active : false,
      };
      this.saveUpdate = "Save";
    }

    toggleModal() {
      this.resetForm();
      this.showModal = !this.showModal;
    }
  }