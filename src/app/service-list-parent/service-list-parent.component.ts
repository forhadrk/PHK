import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-service-list-parent',
  templateUrl: './service-list-parent.component.html',
  styleUrls: ['./service-list-parent.component.css']
})
export class ServiceListParentComponent implements OnInit{
  dataSource: any[] = [];

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(API_URLS.ACTIVE_SERVICE_CATEGORY).subscribe((response: any) => {
      this.dataSource = response;
      console.log(this.dataSource);
    });
  }
}
