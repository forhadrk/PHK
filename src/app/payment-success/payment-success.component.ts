import { Component } from '@angular/core';
import { SharedService } from '../SharedService';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent {
  receivedObject: any;
  bookingID: string = "";
  paymentStatus:string = ""

  constructor(private sharedService: SharedService) {
    this.receivedObject = this.sharedService.getData();
    console.log(this.receivedObject);
    this.bookingID = this.receivedObject.BookingID;
    this.paymentStatus = this.receivedObject.BookingStatus=="Booking Without Payment"?"Your payment not completed yet..!":"Your payment has been successfully processed.";
  }
}
