import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

interface BookingHours {
  name: string;
  code: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  bookingSteps = [
    { label: 'Service Type' },
    { label: 'Booking Dates' },
    { label: 'Address' },
    { label: 'Payments' }
  ];
  activeStepIndex = 0;
  selectedServicePrice: number = 0;
  otherServicesPrice: number = 0;
  priceList: any[] = [];
  dataServices: any[] = [];
  dataBookingServices: any[] = [];
  dataServicesPrice: any[] = [];
  dataTime: any[] = [];
  dataMinutes: any[] = [1, 15, 30, 45];
  //databookingHours: BookingHours[] | undefined=[];
  databookingHours: BookingHours[] = [];
  databookingHour: { ID: number, Name: number }[] = [];
  databookingMinutes: { ID: number, Name: number }[] = [];

  formData = {
    servicesID: -1,
    city: "Perth",
    categoryPriceID: -1,
    bookingDate: new Date(),
    bookingHour: "-1",
    bookingName: "",
    email: "",
    address: "",
    suburb: "",
    mobile: "",
    postCode: "",
    specialNotes: "",
    OtherServicesList: "",
    price: 0,
    serviceDate: ""
  };

  id: string | null = null;

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService, private route: ActivatedRoute) { }



  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);

    this.loadData();

    for (let i = 0; i <= 23; i++) {
      for (let j = 0; j < this.dataMinutes.length; j++) {
        let HourVal = this.formatTwoDigitsNumber(i) + ':' + this.formatTwoDigitsNumber(this.dataMinutes[j]);
        this.databookingHours.push({ name: HourVal, code: HourVal });
      }
    }
    console.log(this.databookingHours);

    for (let i = 0; i <= 23; i++) {
      this.databookingHour.push({ ID: i, Name: i });
    }

    for (let j = 0; j <= 60; j += 5) {
      this.databookingMinutes.push({ ID: j, Name: j });
    }
  }

  loadData() {
    this.http.get(API_URLS.ACTIVE_SERVICE_NAMES).subscribe((response: any) => {
      this.dataServices = response;
    });

    this.http.get(API_URLS.LOAD_BOOKING_OTHER_SERVICES).subscribe((response: any) => {
      this.dataBookingServices = response;
      console.log(response);
    });
  }

  formatTwoDigitsNumber(number: number): string {
    return (number >= 0 && number < 10) ? `0${number}` : `${number}`;
  }

  onSubmit(form: NgForm) {
    this.formData.OtherServicesList = this.selectedServices.toString();
    this.formData.price = this.selectedServicePrice + this.otherServicesPrice;

    const date = new Date(this.formData.bookingDate);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const shortDate = `${year}-${month}-${day}`;
    
    this.formData.serviceDate = shortDate;

    this.http.post(API_URLS.SAVE_UPDATE_BOOKING, this.formData)
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
    console.log(this.formData);
    this.http.post(API_URLS.LOAD_BOOKING_SERVICE_WISE_CATERORY, this.formData).subscribe((response: any) => {
      //console.log(response);
      this.dataServicesPrice = response;
    });
  }

  onDdlCategoryPriceChange() {
    const priceList: any[] = this.dataServicesPrice;
    const foundPerson = priceList.find(priceList => priceList.categoryPriceID === this.formData.categoryPriceID);
    this.selectedServicePrice += foundPerson.price;
    //console.log(foundPerson.price);    
  }

  goToNextStep() {
    if (this.activeStepIndex < this.bookingSteps.length - 1) {
      this.activeStepIndex++;
    }
  }

  goToPreviousStep() {
    if (this.activeStepIndex > 0) {
      this.activeStepIndex--;
    }
  }

  selectedServices: string[] = [];

  updateSelectedService(serviceID: string) {
    const index = this.selectedServices.indexOf(serviceID);
    if (index === -1) {
      this.selectedServices.push(serviceID);
    } else {
      this.selectedServices.splice(index, 1);
    }
    console.log('Selected services:', this.selectedServices);
    console.log(this.getSelectedServicesValues());

    this.otherServicesPrice = this.getSelectedServicesValues();

  }

  getSelectedServicesValues() {
    return this.dataBookingServices
      .filter(service => this.selectedServices.includes(service.otherServicesID))
      .map(service => service.price)
      .reduce((sum, value) => sum + value, 0);
  }
}
