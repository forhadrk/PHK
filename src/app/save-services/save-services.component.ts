import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-save-services',
  templateUrl: './save-services.component.html',
  styleUrls: ['./save-services.component.css']
})
export class SaveServicesComponent implements OnInit {
  dataSource: any[] = [];
  columns: any[] = [];

    formData = {
      
      servicesID:0,
      serviceName: '',
      serviceInfo: '',
      active : false,
    };
    isSaving = false;
    saveSuccess = false;
  
    constructor(private http: HttpClient) {}

    ngOnInit() {
      this.loadData();
    }

    loadData() {
      this.http.get('https://localhost:7253/api/ServiceName/GetAllData').subscribe((response: any) => {
       
        this.dataSource = response;

        if (response.length > 0){ 
          var columnsIn = response[0]; 
          for(var key in columnsIn){
            this.columns.push(key); //console.log(key);
          } 
        }else{
            console.log("No columns");
        }
        //this.columns = response.columns;

        console.log(this.dataSource);
        console.log(this.columns);
      });
    }
  
    onSubmit() {
      console.log(this.formData);
      this.isSaving = true;
      this.http.post('https://localhost:7253/api/ServiceName/SaveUpdateData', this.formData)
        .subscribe(
          () => {
            this.isSaving = false;
            this.saveSuccess = true;
            this.resetForm();
          },
          (error) => {
            console.log(error);
            this.isSaving = false;
          }
        );
    }
  
    resetForm() {
      this.formData = {
        servicesID:0,
        serviceName: '',
        serviceInfo: '',
        active : false,
      };
    }
  }