import { Component,Injectable, ChangeDetectorRef  } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class HeaderComponent {
  userLoggedData: any;
  isLoggedIn: boolean = true;

  // storedUserData:any = localStorage.getItem('userData');
  // this.userData = this.storedUserData ? JSON.parse(this.storedUserData) : null;  

  // if(userData:any) {
  //   this.isLoggedIn = false;
  // }  

  //constructor(private cdr: ChangeDetectorRef) {}

  userDataString = localStorage.getItem('userData');

  ngOnInit() {

    console.log('Header Here');
    //const userDataString = localStorage.getItem('userData');

    if (this.userDataString) {
      this.isLoggedIn = false;
      this.userLoggedData = JSON.parse(this.userDataString);
    }

    //this.cdr.detectChanges();
  }
}
