import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RoleService, UserRole } from '../services/role.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class SignupPage {
  public selectedRole: UserRole = 'customer';

  constructor(private roleService: RoleService, private router: Router) {}

  public onSignup(): void {
    this.roleService.setRole(this.selectedRole);
    if (this.selectedRole === 'customer') {
      this.router.navigate(['/tabs/tab1']);
    } else {
      this.router.navigate(['/shop-owner/dashboard']);
    }
  }
}
