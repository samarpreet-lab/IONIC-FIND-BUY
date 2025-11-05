import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-shop-profile',
  templateUrl: './shop-profile.page.html',
  styleUrls: ['./shop-profile.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ShopProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
