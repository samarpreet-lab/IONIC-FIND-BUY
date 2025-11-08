import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RoleService, UserRole } from '../services/role.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterLink]
})
export class SignupPage implements OnInit {
  public signupForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private roleService: RoleService, private router: Router) {}

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group(
      {
        fullName: ['', [Validators.required, Validators.minLength(3)]],
        selectedRole: ['customer', Validators.required],
        emailPhone: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(8)]],
        repeatPassword: ['', Validators.required],
        agreeTerms: [false, Validators.requiredTrue]
      },
      { validators: this.passwordsMatchValidator }
    );
  }

  /**
   * Custom validator to check if password and repeatPassword match
   */
  private passwordsMatchValidator(group: AbstractControl): ValidationErrors | null {
    const password = group.get('password')?.value;
    const repeatPassword = group.get('repeatPassword')?.value;

    if (password && repeatPassword && password !== repeatPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }

  /**
   * Helper getter to access form controls
   */
  get f(): { [key: string]: AbstractControl } {
    return this.signupForm.controls;
  }

  public onRoleChange(event: any): void {
    const role = event.detail.value as UserRole;
    this.signupForm.patchValue({ selectedRole: role });
  }

  public onSignup(): void {
    // Mark all controls as touched to show validation errors
    if (this.signupForm.invalid) {
      Object.keys(this.signupForm.controls).forEach(key => {
        this.signupForm.get(key)?.markAsTouched();
      });
      console.log('Form is invalid');
      return;
    }

    // Get form values
    const formValue = this.signupForm.value;
    const selectedRole = formValue.selectedRole as UserRole;

    this.roleService.setRole(selectedRole);
    if (selectedRole === 'customer') {
      this.router.navigate(['/tabs/tab1']);
    } else {
      this.router.navigate(['/shop-owner/dashboard']);
    }
  }
}
