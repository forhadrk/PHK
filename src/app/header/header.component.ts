import { Component,Injectable, OnInit  } from '@angular/core';
import { AuthServiceComponent } from '../auth-service/auth-service.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class HeaderComponent implements OnInit {
  constructor(private authService: AuthServiceComponent) {}
  userLoggedData: any;

  public isLoggedIn: boolean = false;

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
      this.isLoggedIn = isLoggedIn;
    });
    console.log(this.isLoggedIn);

    const data = localStorage.getItem('loginDetails');
    console.log('Data:', data);
    if (data !== null) {
      this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
        this.isLoggedIn = true;
      });
      console.log('Data exists:', data);
    } else {
      this.authService.isLoggedIn$.subscribe((isLoggedIn) => {
        this.isLoggedIn = false;
      });
      console.log('Data does not exist in localStorage.');
    }
  }
}
