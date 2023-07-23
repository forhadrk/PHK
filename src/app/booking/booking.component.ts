import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent  implements OnInit{

  dataServices: any[] = [];
  dataServicesPrice: any[] = [];
  dataTime: any[] = [];
  databookingHour: { ID: number, Name: number }[] = [];
  databookingMinutes: { ID: number, Name: number }[] = [];

  formData = {
    servicesID: -1,
    city: "",
    categoryPriceID : -1,
    bookingDate :"",
    bookingHour :"-1",
    bookingMinutes :"-1"
  };

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();

    for (let i = 0; i <= 23; i++) {
      this.databookingHour.push({ ID: i, Name: i });
    }

    for (let j = 1; j <= 60; j++) {
      this.databookingMinutes.push({ ID: j, Name: j });
    }
  }

  loadData() {
    this.http.get(API_URLS.ACTIVE_SERVICE_NAMES).subscribe((response: any) => {
      this.dataServices = response;
    });
  }

  onSubmit(form: NgForm) {
    console.log(this.formData);
    // this.selectedCheckboxValues = this.dataService.filter(option => option.isChecked);
    // this.selectedCheckboxValues = this.dataService
    //   .filter(option => option.isChecked)
    //   .map(option => option.serviceListID);
    // //console.log('Selected Checkbox Values:', this.selectedCheckboxValues);
    // this.formData.servicesListID = this.selectedCheckboxValues.toString();
    // console.log(this.formData);

    // this.http.post(API_URLS.Category_Wise_Service_Save_Data, this.formData)
    //   .subscribe(
    //     () => {
    //       this.sweetAlertService.showSuccessPopupAlert('Data Process Successfully!');
    //       //this.loadData();
    //       //this.resetForm();
    //     },
    //     (error) => {

    //       this.sweetAlertService.showErrorAlert('Something went wrong!');
    //       console.log(error);
    //     }
    //   );
  }


  onDdlCategoryChange() {
    this.http.post(API_URLS.LOAD_BOOKING_SERVICE_WISE_CATERORY,this.formData).subscribe((response: any) => {
      this.dataServicesPrice = response;
    });    
  }
}
