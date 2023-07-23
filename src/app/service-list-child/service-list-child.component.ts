import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-service-list-child',
  templateUrl: './service-list-child.component.html',
  styleUrls: ['./service-list-child.component.css']
})
export class ServiceListChildComponent implements OnInit {
  @Input() data: string | undefined;

  dataSourceChild: any[] = [];

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    var _dbModel = {
      ServiceListID: this.data
    };

    this.http.post(API_URLS.ACTIVE_SERVICE_WISE_CATEGORY_LIST,_dbModel).subscribe((response: any) => {
      this.dataSourceChild = response;
      console.log(this.dataSourceChild);
    });
  }
}
