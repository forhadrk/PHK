import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class SweetAlertService {
    showSuccessAlert(message: string) {
        Swal.fire('Success', message, 'success');
    }

    showErrorAlert(message: string) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: message,
            footer: ''
        })
    }

    showSuccessPopupAlert(message: string) {
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: message,
            showConfirmButton: false,
            timer: 1500
          })
    }

    showConfirmAlert(message: string) {
        Swal.fire({
            title: 'Are you sure?',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel'
          })
    }

    showConfirmDeleteAlert(message: string) {
       return Swal.fire({
            title: 'Are you sure?',
            text: message,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'Cancel'
          })
    }
    
}
