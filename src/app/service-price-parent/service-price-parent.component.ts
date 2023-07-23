import { Component, OnInit,Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-service-price-parent',
  templateUrl: './service-price-parent.component.html',
  styleUrls: ['./service-price-parent.component.css']
})
export class ServicePriceParentComponent implements OnInit {
  @Input() ServicesID: string | undefined;
  dataSource: any[] = [];
  

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    console.log(this.ServicesID);
    var _dbModel = {
      ServicesID: this.ServicesID
    };
    this.http.post(API_URLS.LOAD_SELECTED_SERVICE_PRICE, _dbModel).subscribe((response: any) => {
      this.dataSource = response;
      console.log(this.dataSource);
    });
  }

}
