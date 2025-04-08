import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule]
})
export class LoginComponent {
  logindata = {
    email: '',
    password: ''
  };

  constructor(private router: Router) {}

  login() {
    const storedUser = JSON.parse(localStorage.getItem('user') || '{}');

    if (
      storedUser.email === this.logindata.email &&
      storedUser.password === this.logindata.password
    ) {
      alert('Login Successful!');
      this.router.navigate(['/home']);
    } else {
      alert('Login Failed');
    }
  }
}
