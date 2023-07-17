import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Swal from 'sweetalert2';
import { NgForm } from '@angular/forms';
import { API_URLS  } from '../api-urls';

@Component({
  selector: 'app-faq-questions',
  templateUrl: './faq-questions.component.html',
  styleUrls: ['./faq-questions.component.css']
})
export class FaqQuestionsComponent implements OnInit {
  dataSource: any[] = [];
  columns: any[] = [];
  saveUpdate: string = "Save";
  modalTitle: string = "FAQ";

  formData = {
    fAQDID: 0,
    questionTitle: '',
    questionAnswer: ''
  };

  isSaving = false;
  showModal = false;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.http.get(API_URLS.FAQ_Get_All_Data).subscribe((response: any) => {
      this.dataSource = response;
      //console.log(this.dataSource);
    });
  }

  onSubmit(form: NgForm) {
    if (!form.invalid) {
      this.isSaving = true;
      this.http.post(API_URLS.FAQ_Save_Update_Data, this.formData)
        .subscribe(
          () => {
            Swal.fire(
              'Good job!',
              'Data Process Successfully!',
              'success'
            );
            this.isSaving = false;
            this.loadData();
            this.showModal = false;
            this.resetForm();
          },
          (error) => {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something went wrong!',
              footer: ''
            })
            console.log(error);
            this.isSaving = false;
          }
        );
    }
  }
  resetForm() {
    this.formData = {
      fAQDID: 0,
      questionTitle: '',
      questionAnswer: ''
    };

    this.saveUpdate = "Save";
  }

  toggleModal() {
    this.resetForm();
    this.showModal = !this.showModal;
  }

  GetEditData(data: any) {
    var _ID = data.faqdid;
    this.formData.fAQDID = _ID;
    this.http.post(API_URLS.FAQ_Get_Edit_Data, this.formData).subscribe((response: any) => {
      this.formData.questionTitle = response[0].questionTitle;
      this.formData.questionAnswer = response[0].questionAnswer;

      this.saveUpdate = "Update";
      this.showModal = !this.showModal;
    });
  }


  DeleteRowData(data: any) {
    var _ID = data.faqdid;
    this.formData.fAQDID = _ID;

    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'Cancel'
    }).then((result) => {
      if (result.isConfirmed) {
        this.http.post(API_URLS.FAQ_Delete_Selected_Data, this.formData).subscribe((response: any) => {
          console.log(response);
          this.loadData();
          Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
        },
          (error) => {
            console.log(error);
            Swal.fire('Deleted', 'Your item deleted failed:)', 'info');
          }
        );
      }
    });
  }
}
