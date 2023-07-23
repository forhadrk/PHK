import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent {

  constructor(private router: Router) { }

  ngOnInit() {
    const userDataString = localStorage.getItem('userData');

    if (userDataString) {
      const keyToRemove = 'userData';
      localStorage.removeItem(keyToRemove);
    }

    this.router.navigate(['/']);
    //localStorage.clear(); // Remove all localStorage
  }

}
