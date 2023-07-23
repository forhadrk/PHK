import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-service-category-price',
  templateUrl: './service-category-price.component.html',
  styleUrls: ['./service-category-price.component.css']
})
export class ServiceCategoryPriceComponent implements OnInit {
  dataSource: any[] = [];
  dataServicesSource: any[] = [];

    formData = {      
      categoryPriceID:0,
      servicesID:"-1",
      title: '',
      price: 0,
      priceInfo : '1 Hour',
    };

    isSaving = false;
    saveSuccess = false;
    showModal = false;
    saveUpdate: string = "Save";
    modalTitle: string = "Service Price";
  
    constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) {}

    ngOnInit() {
      this.loadData();
      this.loadServiceNames();
    }

    loadData() {
      this.http.get(API_URLS.Service_Category_Price_Get_All_Data).subscribe((response: any) => {       
        this.dataSource = response;
        console.log(this.dataSource);
      });
    }

    loadServiceNames() {
      this.http.get(API_URLS.ACTIVE_SERVICE_NAMES).subscribe((response: any) => {       
        this.dataServicesSource = response;
        //console.log(this.dataServicesSource);
      });
    }
  
    onSubmit(form: NgForm) {
      //console.log(this.formData);
      if (!form.invalid) {
      this.isSaving = true;
      this.http.post(API_URLS.Service_Category_Price_Save_Update_Data, this.formData)
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
      this.formData.categoryPriceID = data.categoryPriceID;
      this.http.post(API_URLS.Service_Category_Price_Get_Edit_Data, this.formData).subscribe((response: any) => {
        console.log(response);
        this.formData.servicesID = response[0].servicesID;
        this.formData.title = response[0].title;
        this.formData.price = response[0].price;
        this.formData.priceInfo = response[0].priceInfo;
  
        this.saveUpdate = "Update";
        this.showModal = !this.showModal;
      });
    }
  
  
    DeleteRowData(data: any) {
      this.formData.categoryPriceID =  data.categoryPriceID;
      this.sweetAlertService.showConfirmDeleteAlert('You won\'t be able to revert this!').then((result) => {
        if (result.isConfirmed) {
          this.http.post(API_URLS.Service_Category_Price_Delete_Selected_Data, this.formData).subscribe((response: any) => {
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
        categoryPriceID:0,
        servicesID:"-1",
        title: '',
        price: 0,
        priceInfo : '1 Hour',
      };
      this.saveUpdate = "Save";
    }

    toggleModal() {
      this.resetForm();
      this.showModal = !this.showModal;
    }
  }
