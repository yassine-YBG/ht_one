import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mot_de_passe: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  onRegister(): void {
    if (this.registerForm.invalid) {
      alert('Registration Successful!');
      return;
    }

    const registerData = this.registerForm.value;

    this.userService.register(registerData).subscribe(
      (response: any) => {
        console.log('Registration success', response);
        this.successMessage = 'Registration successful!';
        this.router.navigate(['/login']);  // Redirect to login after successful registration
      },
      (error) => {
        this.errorMessage = 'Registration failed';
        console.log('Registration failed', error);
      }
    );
  }
}
