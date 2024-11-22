import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onLogin(): void {
    if (this.loginForm.invalid) {
      alert('Login Successful!');
      return;
    }

    const loginData = this.loginForm.value;

    this.userService.login(loginData).subscribe(
      (response: any) => {
        console.log('Login success', response);
        this.router.navigate(['/categories']);  // Redirect to a dashboard or home page
      },
      (error) => {
        this.errorMessage = 'Invalid credentials';
        console.log('Login failed', error);
      }
    );
  }
}
