import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-service-category-price-details',
  templateUrl: './service-category-price-details.component.html',
  styleUrls: ['./service-category-price-details.component.css']
})
export class ServiceCategoryPriceDetailsComponent {
  dataSource: any[] = [];
  dataServicesSource: any[] = [];
  dataServicesPrice: any[] = [];

  formData = {
    categoryPriceDetailsID: 0,
    categoryPriceID: "-1",
    servicesID: "-1",
    title: ''
  };

  isSaving = false;
  saveSuccess = false;
  showModal = false;
  saveUpdate: string = "Save";
  modalTitle: string = "Service Price";

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
    this.loadServiceNames();
  }

  loadData() {
    this.http.get(API_URLS.Service_Category_Price_Details_Get_All_Data).subscribe((response: any) => {
      this.dataSource = response;
      //console.log(this.dataSource);
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
      this.http.post(API_URLS.Service_Category_Price_Details_Save_Update_Data, this.formData)
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
    //const dropdown = document.getElementById('servicesID') as HTMLSelectElement;

    this.formData.categoryPriceDetailsID = data.categoryPriceDetailsID;
    this.http.post(API_URLS.Service_Category_Price_Details_Get_Edit_Data, this.formData).subscribe((response: any) => {
      //console.log(response);
      this.LoadCategoryData(response[0].servicesID);
      this.formData.servicesID = response[0].servicesID;
      //dropdown.addEventListener('change', this.onServiceCategoryChange);

      this.formData.categoryPriceID = response[0].categoryPriceID;
      this.formData.title = response[0].title;

      this.saveUpdate = "Update";
      this.showModal = !this.showModal;
    });
  }


  DeleteRowData(data: any) {
    this.formData.categoryPriceDetailsID = data.categoryPriceDetailsID;
    this.sweetAlertService.showConfirmDeleteAlert('You won\'t be able to revert this!').then((result) => {
      if (result.isConfirmed) {
        this.http.post(API_URLS.Service_Category_Price_Details_Delete_Selected_Data, this.formData).subscribe((response: any) => {
          //console.log(response);
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

  onServiceCategoryChange() {
    this.LoadCategoryData(this.formData.servicesID);
  }

  LoadCategoryData(servicesID: any) {
    const _dbModel = {
      'servicesID': servicesID
    }
    this.http.post(API_URLS.Service_Category_Price_Details_Selected_Service_Prices_Data, _dbModel).subscribe((response: any) => {
      this.dataServicesPrice = response;
      //console.log(this.dataServicesPrice);
    });
  }

  resetForm() {
    this.formData = {
      categoryPriceDetailsID: 0,
      categoryPriceID: "-1",
      servicesID: "-1",
      title: ''
    };
    this.saveUpdate = "Save";
    this.dataServicesPrice = [];
  }

  toggleModal() {
    this.resetForm();
    this.showModal = !this.showModal;
  }
}
