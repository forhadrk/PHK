import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-service-price-child',
  templateUrl: './service-price-child.component.html',
  styleUrls: ['./service-price-child.component.css']
})
export class ServicePriceChildComponent  implements OnInit{
  @Input() data: string | undefined;

  dataSourceChild: any[] = [];

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    var _dbModel = {
      CategoryPriceID: this.data
    };

    this.http.post(API_URLS.LOAD_SELECTED_SERVICE_PRICE_DETAILS,_dbModel).subscribe((response: any) => {
      this.dataSourceChild = response;
      console.log(this.dataSourceChild);
    });
  }
}
