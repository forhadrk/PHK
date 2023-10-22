import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceComponent } from '../auth-service/auth-service.component';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router,private authService: AuthServiceComponent) {}

  ngOnInit() {
    localStorage.clear();
    this.authService.setLoggedIn(false);
    this.router.navigate(['/']);
  }

  onLogout(): void {
    localStorage.clear();
    this.authService.setLoggedIn(false);
    this.router.navigate(['/home']);
  }

}
