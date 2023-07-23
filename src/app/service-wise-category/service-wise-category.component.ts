import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-service-wise-category',
  templateUrl: './service-wise-category.component.html',
  styleUrls: ['./service-wise-category.component.css']
})
export class ServiceWiseCategoryComponent implements OnInit {
  //servicesID: string = "-1";
  dataCategory: any[] = [];
  dataService: any[] = [];
  selectedCheckboxValues: any[] = [];
  responseCheckboxData: any[] = [];
  saveUpdate: string = "Save";

  formData = {
    servicesID: -1,
    servicesListID: ""
  };

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(API_URLS.Service_Name_Get_All_Data).subscribe((response: any) => {
      this.dataCategory = response;
      //console.log(this.dataSource);
    });

    this.http.get(API_URLS.Category_Wise_Service_Name_Data).subscribe((response: any) => {
      this.dataService = response;
      console.log(this.dataService);
    });
  }

  onSubmit(form: NgForm) {
    // this.selectedCheckboxValues = this.dataService.filter(option => option.isChecked);



    this.selectedCheckboxValues = this.dataService
      .filter(option => option.isChecked)
      .map(option => option.serviceListID);
    //console.log('Selected Checkbox Values:', this.selectedCheckboxValues);
    this.formData.servicesListID = this.selectedCheckboxValues.toString();
    console.log(this.formData);

    this.http.post(API_URLS.Category_Wise_Service_Save_Data, this.formData)
      .subscribe(
        () => {
          this.sweetAlertService.showSuccessPopupAlert('Data Process Successfully!');
          //this.loadData();
          //this.resetForm();
        },
        (error) => {

          this.sweetAlertService.showErrorAlert('Something went wrong!');
          console.log(error);
        }
      );
  }

  onDdlCategoryChange() {
    //this.dataService = [];
    //console.log('Selected Value:', this.formData.servicesID);
    this.http.post(API_URLS.Category_Wise_Selected_Service_Data,this.formData).subscribe((response: any) => {
      this.responseCheckboxData = response;
      //this.dataService = response;
      console.log(response);

      this.dataService = this.responseCheckboxData.map(item => {
        return {
          id: item.ServiceListID, // Assuming the API response has a 'label' property
          label: item.ServiceTitle, // Assuming the API response has a 'label' property
          value: item.ServiceListID, // Assuming the API response has a 'value' property
          checked: item.isChecked // Assuming the API response has a 'isChecked' property to indicate checkbox status
        };
      });
    });
  }

}
