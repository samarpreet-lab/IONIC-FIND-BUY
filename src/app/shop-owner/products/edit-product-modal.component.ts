import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-edit-product-modal',
  template: `
    <div class="edit-product-modal-container">
      <!-- Modal Header -->
      <div class="modal-header">
        <h2>Edit Product</h2>
        <ion-button fill="clear"  style="color:#290a70;" (click)="dismiss()">
          <ion-icon name="close-outline"></ion-icon>
        </ion-button>
      </div>

      <!-- Modal Content -->
      <div class="modal-content">
        <form>
          <!-- Product Image Section -->
          <div class="image-section">
            <div class="image-preview">
              <img [src]="editedProduct.image" [alt]="editedProduct.name" />
            </div>
            <ion-button fill="outline" expand="block" size="small" style="color:#290a70;--border-color:#290a70;">
              <ion-icon name="camera-outline" slot="start"></ion-icon>
              Change Image
            </ion-button>
          </div>

          <!-- Product Details Section -->
          <div class="form-section">
            <ion-label class="section-title">Product Details</ion-label>

            <!-- Product Name -->
            <div class="form-group">
              <ion-label position="stacked">Product Name</ion-label>
              <ion-input
                [(ngModel)]="editedProduct.name"
                name="name"
                placeholder="Enter product name"
                clearInput="true"
              ></ion-input>
            </div>

            <!-- Category -->
            <div class="form-group">
              <ion-label position="stacked">Category</ion-label>
              <ion-select [(ngModel)]="editedProduct.category" name="category" placeholder="Select category">
                <ion-select-option *ngFor="let cat of categories">{{ cat }}</ion-select-option>
              </ion-select>
            </div>

            <!-- Price -->
            <div class="form-group">
              <ion-label position="stacked">Price (₹)</ion-label>
              <ion-input
                [(ngModel)]="editedProduct.price"
                name="price"
                type="number"
                placeholder="Enter price"
                clearInput="true"
              ></ion-input>
            </div>

            <!-- Stock Status -->
            <div class="form-group stock-group">
              <ion-label>In Stock</ion-label>
              <ion-toggle
                [(ngModel)]="editedProduct.inStock"
                name="inStock"
                class="purple-toggle"
              ></ion-toggle>
            </div>

            <!-- On Sale -->
            <div class="form-group sale-group">
              <ion-label>On Sale</ion-label>
              <ion-toggle
                [(ngModel)]="editedProduct.hasSale"
                name="hasSale"
                class="purple-toggle"
              ></ion-toggle>
            </div>
          </div>
        </form>
      </div>

      <!-- Modal Footer -->
      <div class="modal-footer">
        <div class="footer-delete-section">
          <ion-button fill="outline" expand="block" style="color:#290a70;--border-color:#290a70;">
            <ion-icon name="trash-outline" slot="start"></ion-icon>
            DELETE PRODUCT
          </ion-button>
        </div>
        <div class="footer-buttons">
          <ion-button fill="outline" expand="block" style="color:#290a70;--border-color:#290a70;" (click)="dismiss()">
            CANCEL
          </ion-button>
          <ion-button fill="solid" expand="block" style="--background:#290a70;">
            SAVE CHANGES
          </ion-button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .edit-product-modal-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      max-height: 100vh;
      background: var(--ion-background-color, #ffffff);
    }

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px 16px;
      border-bottom: 1px solid var(--ion-border-color, #e8e8e8);
      background: var(--ion-color-light, #f9f9f9);
      flex-shrink: 0;
    }

    .modal-header h2 {
      margin: 0;
      font-size: 16px;
      font-weight: 600;
      color: var(--ion-text-color, #333);
    }

    .modal-header ion-button {
      --padding-start: 0;
      --padding-end: 0;
    }

    .modal-content {
      flex: 1;
      overflow-y: auto;
      padding: 16px;
      min-height: 0;
    }

    .image-section {
      margin-bottom: 16px;
      text-align: center;
    }

    .image-preview {
      width: 100%;
      height: 150px;
      border-radius: 8px;
      overflow: hidden;
      margin-bottom: 12px;
      background: var(--ion-color-light, #f9f9f9);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .image-preview img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .form-section {
      margin-bottom: 12px;
    }

    .section-title {
      display: block;
      font-size: 14px;
      font-weight: 600;
      color: var(--ion-text-color-secondary, #666);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-bottom: 12px;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group ion-label {
      font-size: 14px;
      font-weight: 500;
      color: var(--ion-text-color, #333);
    }

    .form-group ion-input,
    .form-group ion-select {
      --padding-start: 12px;
      --padding-end: 12px;
      border: 1px solid var(--ion-border-color, #e8e8e8);
      border-radius: 6px;
      margin-top: 8px;
    }

    .stock-group,
    .sale-group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 12px;
      background: var(--ion-color-light, #f9f9f9);
      border-radius: 6px;
      margin-bottom: 12px;
    }

    .stock-group ion-label,
    .sale-group ion-label {
      margin: 0;
    }

    .modal-footer {
      display: flex;
      flex-direction: column;
      gap: 0;
      padding: 16px;
      border-top: 1px solid var(--ion-border-color, #e8e8e8);
      background: var(--ion-color-light, #f9f9f9);
      flex-shrink: 0;
    }

    .footer-delete-section {
      margin-bottom: 16px;
      border-bottom: 1px solid var(--ion-border-color, #e8e8e8);
      padding-bottom: 12px;
    }

    .footer-delete-section ion-button {
      margin: 0;
      --padding-start: 12px;
      --padding-end: 12px;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .footer-buttons {
      display: flex;
      gap: 12px;
      flex-wrap: wrap;
    }

    .footer-buttons ion-button {
      margin: 0;
      flex: 1;
      min-width: 120px;
      --padding-start: 12px;
      --padding-end: 12px;
      font-size: 13px;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .purple-toggle {
      --handle-background-checked: #290a70;
      --track-background-checked: #290a70;
      --handle-background: #ccc;
      --track-background: #e8e8e8;
    }
  `],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class EditProductModalComponent {
  @Input() product: any;
  @Input() categories: string[] = [];

  editedProduct: any;

  constructor(private modalController: ModalController) {}

  ngOnInit() {
    // Create a copy to avoid modifying the original until save is clicked
    this.editedProduct = { ...this.product };
  }

  dismiss() {
    this.modalController.dismiss();
  }
}
