import { Component, OnInit, EnvironmentInjector, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { statsChart, cube, storefront } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonTabBar, IonTabButton, IonIcon, IonLabel, CommonModule, FormsModule]
})
export class TabsPage implements OnInit {
  public environmentInjector = inject(EnvironmentInjector);

  constructor() {
    addIcons({ statsChart, cube, storefront });
  }

  ngOnInit() {
  }

}
