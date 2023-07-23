import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-servicep-price',
  templateUrl: './servicep-price.component.html',
  styleUrls: ['./servicep-price.component.css']
})

export class ServicepPriceComponent implements OnInit {
  dataSource: any[] = [];
  saveUpdate: string = "Save";
  modalTitle: string = "FAQ";

  formData = {
    serviceListID: 0,
    serviceTitle: '',
    price: 0,
    priceFor: '',
    active: false
  };

  isSaving = false;
  showModal = false;

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(API_URLS.Service_Price_Get_All_Data).subscribe((response: any) => {
      this.dataSource = response;
      console.log(this.dataSource);
    });
  }

  onSubmit(form: NgForm) {
   // console.log(this.formData);
    if (!form.invalid) {
      this.isSaving = true;
      this.http.post(API_URLS.Service_Price_Save_Update_Data, this.formData)
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
  resetForm() {
    this.formData = {
      serviceListID: 0,
      serviceTitle: '',
      price: 0,
      priceFor: '',
      active: false
    };

    this.saveUpdate = "Save";
  }

  toggleModal() {
    this.resetForm();
    this.showModal = !this.showModal;
  }

  GetEditData(data: any) {
    //console.log(data);
    var _ID = data.serviceListID;
    this.formData.serviceListID = _ID;
    this.http.post(API_URLS.Service_Price_Get_Edit_Data, this.formData).subscribe((response: any) => {
      //console.log(response);
      this.formData.serviceTitle = response[0].serviceTitle;
      this.formData.price = response[0].price;
      this.formData.priceFor = response[0].priceFor;
      this.formData.active = response[0].active;

      this.saveUpdate = "Update";
      this.showModal = !this.showModal;
    });
  }


  DeleteRowData(data: any) {
    var _ID = data.serviceListID;
    this.formData.serviceListID = _ID;
    this.sweetAlertService.showConfirmDeleteAlert('You won\'t be able to revert this!').then((result) => {
      if (result.isConfirmed) {
        this.http.post(API_URLS.Service_Price_Delete_Selected_Data, this.formData).subscribe((response: any) => {
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
}
