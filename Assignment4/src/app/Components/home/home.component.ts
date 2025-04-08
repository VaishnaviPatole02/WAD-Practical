import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  username: string = '';
  email: string = '';

  constructor(private router: Router) {}

  ngOnInit() {
    if (typeof window !== 'undefined') {
      const userdata = localStorage.getItem('user');
      if (userdata) {
        try {
          const parsedData = JSON.parse(userdata);
          this.username = parsedData.username || '';
          this.email = parsedData.email || '';
        } catch (error) {
          console.error('Error parsing user data:', error);
        }
      }
    }
  }
}
