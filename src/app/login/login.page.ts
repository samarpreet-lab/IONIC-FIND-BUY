import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { RoleService, UserRole } from '../services/role.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class LoginPage {
  constructor(private roleService: RoleService, private router: Router) {}

  public login(role: UserRole): void {
    this.roleService.setRole(role);
    if (role === 'customer') {
      this.router.navigate(['/tabs/tab1']);
    } else {
      this.router.navigate(['/shop-owner/dashboard']);
    }
  }
}
