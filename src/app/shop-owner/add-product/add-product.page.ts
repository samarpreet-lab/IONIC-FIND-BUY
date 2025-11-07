import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, RouterLink]
})
export class AddProductPage implements OnInit {
  public product = {
    name: '',
    description: '',
    category: '',
    subcategory: '',
    sku: '',
    availability: 'In Stock',
    price: null,
    quantity: null,
    showAtLocation: false,
    publicListing: false,
    images: [] as string[]
  };

  public uploadedImages: any[] = [];

  constructor() { }

  ngOnInit() {
  }

  // Open camera to take a photo
  public async takePhoto(): Promise<void> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera
      });

      if (image.dataUrl) {
        this.uploadedImages.push({
          id: Date.now(),
          src: image.dataUrl,
          timestamp: new Date()
        });
        this.product.images.push(image.dataUrl);
        console.log('Photo captured:', image);
      }
    } catch (error) {
      console.error('Error taking photo:', error);
    }
  }

  // Open gallery to select a photo
  public async selectFromGallery(): Promise<void> {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Photos
      });

      if (image.dataUrl) {
        this.uploadedImages.push({
          id: Date.now(),
          src: image.dataUrl,
          timestamp: new Date()
        });
        this.product.images.push(image.dataUrl);
        console.log('Photo selected:', image);
      }
    } catch (error) {
      console.error('Error selecting photo:', error);
    }
  }

  // Remove an image from the list
  public removeImage(imageId: number): void {
    this.uploadedImages = this.uploadedImages.filter(img => img.id !== imageId);
    this.product.images = this.uploadedImages.map(img => img.src);
    console.log('Image removed');
  }

  public publishProduct(): void {
    console.log('Publishing product:', this.product);
    // Add your product publish logic here
  }

  public saveDraft(): void {
    console.log('Saving product as draft:', this.product);
    // Add your draft save logic here
  }
}
