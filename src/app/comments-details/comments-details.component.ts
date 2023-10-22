import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { API_URLS } from '../api-urls';
import { SweetAlertService } from '../sweet-alert.service';

@Component({
  selector: 'app-comments-details',
  templateUrl: './comments-details.component.html',
  styleUrls: ['./comments-details.component.css']
})
export class CommentsDetailsComponent implements OnInit {
  dataSource: any[] = [];
  saveUpdate: string = "Save";
  modalTitle: string = "Comments";

  formData = {
    commentsID: 0,
    name: '',
    message: ''
  };

  isSaving = false;
  showModal = false;

  constructor(private http: HttpClient, private sweetAlertService: SweetAlertService) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(API_URLS.Comments_Get_All_Data).subscribe((response: any) => {
      this.dataSource = response;
      //console.log(this.dataSource);
    });
  }

  onSubmit(form: NgForm) {
    // console.log(this.formData);
    if (!form.invalid) {
      this.isSaving = true;
      this.http.post(API_URLS.Comments_Save_Update_Data, this.formData)
        .subscribe(
          () => {
            this.sweetAlertService.showSuccessPopupAlert('Data Process Successfully!');
            this.isSaving = false;
            this.loadData();
            this.showModal = false;
            this.resetForm();
          },
          (error) => {

            this.sweetAlertService.showErrorAlert('Something went wrong!');
            console.log(error);
            this.isSaving = false;
          }
        );
    }
  }
  resetForm() {
    this.formData = {
      commentsID: 0,
      name: '',
      message: ''
    };

    this.saveUpdate = "Save";
  }

  toggleModal() {
    this.resetForm();
    this.showModal = !this.showModal;
  }

  GetEditData(data: any) {
    //console.log(data);
    var _ID = data.commentsID;
    this.formData.commentsID = _ID;
    this.http.post(API_URLS.Comments_Get_Edit_Data, this.formData).subscribe((response: any) => {
      //console.log(response);
      this.formData.name = response[0].name;
      this.formData.message = response[0].message;

      this.saveUpdate = "Update";
      this.showModal = !this.showModal;
    });
  }

  DeleteRowData(data: any) {
    this.formData.commentsID =  data.commentsID;
    this.sweetAlertService.showConfirmDeleteAlert('You won\'t be able to revert this!').then((result) => {
      if (result.isConfirmed) {
        this.http.post(API_URLS.Comments_Delete_Selected_Data, this.formData).subscribe((response: any) => {
          //console.log(response);
          this.loadData();
          this.sweetAlertService.showSuccessPopupAlert('Your item has been deleted');
        },
          (error) => {
            console.log(error);
            this.sweetAlertService.showErrorAlert('Your item deleted failed:)');
          }
        );
      }
    });
  }
}