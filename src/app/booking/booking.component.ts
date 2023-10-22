import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { SharedService } from '../SharedService';

interface BookingHours {
  name: string;
  code: string;
}

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
  providers: [MessageService]
})
export class BookingComponent implements OnInit {

  bookingSteps = [
    { label: 'Service Type' },
    { label: 'Booking Dates' },
    { label: 'Address' },
    { label: 'Summary' },
    { label: 'Payment' }
  ];

  paymentButtonText: string = "Booking With Payment";
  isNowPayment: boolean = true;
  isProcessing: boolean = false;
  summaryServiceNames: string = "";
  summaryServicePriceName: string = "";
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

  dataCardMonthNo: { ID: string, Name: string }[] = [
    { ID: '01', Name: 'Jan' },
    { ID: '02', Name: 'Feb' },
    { ID: '03', Name: 'Mar' },
    { ID: '04', Name: 'Apr' },
    { ID: '05', Name: 'May' },
    { ID: '06', Name: 'Jun' },
    { ID: '07', Name: 'Jul' },
    { ID: '08', Name: 'Aug' },
    { ID: '09', Name: 'Sep' },
    { ID: '10', Name: 'Oct' },
    { ID: '11', Name: 'Nov' },
    { ID: '12', Name: 'Dec' }
  ];
  dataCardYearNo: { ID: string, Name: string }[] = [
    { ID: '23', Name: '2023' },
    { ID: '24', Name: '2024' },
    { ID: '25', Name: '2025' },
    { ID: '26', Name: '2026' },
    { ID: '27', Name: '2027' },
    { ID: '28', Name: '2028' },
    { ID: '29', Name: '2029' },
  ];

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
    serviceDate: "",
    totalPrice: 0,
    cardName: "",
    cardNumber: "",
    expiryMonth: "",
    expiryYear: "",
    cvcNo: "",
    finalPrice: 0,
    isBookingWithPayment:false
  };

  id: string | null = null;

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService, private route: ActivatedRoute,
    private messageService: MessageService, private router: Router,private sharedService: SharedService) { }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.dataCardMonthNo);

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
    if(this.isNowPayment===false){
      if(this.formData.cardName===""){
        alert('Please Enter the Card Name..!');
        return;
      }
      if(this.formData.cardNumber===""){
        alert('Please Enter the Card Number..!');
        return;
      }
      if(this.formData.cvcNo===""){
        alert('Please Enter the Card CVC No..!');
        return;
      }
    }
    this.isProcessing = true;
    this.formData.isBookingWithPayment = this.isNowPayment;
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
        (response: any) => {
          //console.log(response);
          //this.sweetAlertService.showSuccessPopupAlert('Data Process Successfully!');
          if (response.bookingID !== "" && (response.status ==="Booking Without Payment" || response.status ==="APPROVED")) {
            const bookingResponse = { BookingID: response.bookingID,BookingStatus: response.status };
            this.sharedService.setData(bookingResponse);
            this.isProcessing = false;
            this.router.navigate(['/success']);            
          }
          else {
            this.isProcessing = false;
            this.sweetAlertService.showErrorAlert('Something went wrong!');
          }
          //this.loadData();
          //this.resetForm();
        },
        (error) => {
          this.isProcessing = false;
          this.sweetAlertService.showErrorAlert('Something went wrong!');
          console.log(error);
        }
      );
  }


  onDdlCategoryChange() {
    console.log(this.formData);
    this.http.post(API_URLS.LOAD_BOOKING_SERVICE_WISE_CATERORY, this.formData).subscribe((response: any) => {
      this.dataServicesPrice = response;
    });
  }

  onDdlCategoryPriceChange() {
    const priceList: any[] = this.dataServicesPrice;
    const foundPerson = priceList.find(priceList => priceList.categoryPriceID === this.formData.categoryPriceID);
    this.selectedServicePrice += foundPerson.price;
    this.formData.totalPrice = this.selectedServicePrice + this.otherServicesPrice;
    this.formData.finalPrice = this.selectedServicePrice + this.otherServicesPrice;
  }

  goToNextStep() {
    let _servicesID = this.formData.servicesID;
    let _categoryPriceID = this.formData.categoryPriceID;
    let _bookingHour = this.formData.bookingHour;
    let _bookingName = this.formData.bookingName;
    let _email = this.formData.email;
    let _address = this.formData.address;
    let _suburb = this.formData.suburb;
    let _mobile = this.formData.mobile;
    let _postCode = this.formData.postCode;

    if (this.activeStepIndex < this.bookingSteps.length - 1) {
      if (this.activeStepIndex === 0) {
        console.log(this.formData.servicesID);
        console.log(this.formData.categoryPriceID);

        if (_servicesID === null || _servicesID <= 0) {
          this.showWarn("Please Select Your Service..!");
          alert('Please Select Your Service.. !');
          return;
        }

        if (_categoryPriceID === null || _categoryPriceID <= 0) {
          alert('Please Select Your Service Category.. !');
          return;
        }

        const selSerName = this.dataServices.find(item => item.servicesID === this.formData.servicesID);
        const selSerPrice = this.dataServicesPrice.find(item => item.categoryPriceID === this.formData.categoryPriceID);

        this.summaryServiceNames = selSerName.serviceName;
        this.summaryServicePriceName = selSerPrice.title;
      }

      if (this.activeStepIndex === 2) {
        if (_bookingName === "") {
          alert('Please Enter Your Name.. !');
          return;
        }

        if (_email === "") {
          alert('Please Enter Your Email.. !');
          return;
        }

        if (_address === "") {
          alert('Please Enter Your Address.. !');
          return;
        }

        if (_suburb === "") {
          alert('Please Enter Your Suburb.. !');
          return;
        }

        if (_mobile === "") {
          alert('Please Enter Your Mobile.. !');
          return;
        }

        if (_postCode === "") {
          alert('Please Enter Your Post Code.. !');
          return;
        }

        const date = new Date(this.formData.bookingDate);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart(2, "0");
        const day = date.getDate().toString().padStart(2, "0");
        const shortDate = `${year}-${month}-${day}`;

        this.formData.serviceDate = shortDate;
      }
      this.activeStepIndex++;
    }
  }

  goToPreviousStep() {
    if (this.activeStepIndex > 0) {
      this.activeStepIndex--;
    }
  }

  showWarn(message: string) {
    this.messageService.add({ severity: 'warn', summary: 'Warn', detail: message });
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

    this.formData.totalPrice = this.selectedServicePrice + this.otherServicesPrice;
    this.formData.finalPrice = this.selectedServicePrice + this.otherServicesPrice;

  }

  getSelectedServicesValues() {
    return this.dataBookingServices
      .filter(service => this.selectedServices.includes(service.otherServicesID))
      .map(service => service.price)
      .reduce((sum, value) => sum + value, 0);
  }

  PaymentInfo() {
    if (this.isNowPayment === true) {
      this.isNowPayment = false;
      this.paymentButtonText = "Booking Without Payment";
    }
    else if (this.isNowPayment === false) {
      this.isNowPayment = true;
      this.paymentButtonText = "Booking With Payment";
    }
  }
}
