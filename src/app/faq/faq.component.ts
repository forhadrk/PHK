import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URLS } from '../api-urls';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent implements OnInit{

  dataSource: any[] = [];

  ngOnInit() {
    this.loadData();
  }

  constructor(private http: HttpClient) {}

  loadData() {
    this.http.get(API_URLS.FAQ_Get_All_Data).subscribe((response: any) => {       
      this.dataSource = response;
      console.log(this.dataSource);
    });
  }
}
