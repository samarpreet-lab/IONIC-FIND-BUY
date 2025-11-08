import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, ReactiveFormsModule, RouterLink]
})
export class AddProductPage implements OnInit {
  public productForm!: FormGroup;
  public uploadedImages: any[] = [];
  public category: string = '';
  public subcategory: string = '';
  public sku: string = '';
  public availability: string = 'In Stock';
  public quantity: number | null = null;
  public showAtLocation: boolean = false;
  public publicListing: boolean = false;
  public images: string[] = [];

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      description: ['']
    });
  }

  /**
   * Helper getter to access form controls
   */
  get f(): { [key: string]: AbstractControl } {
    return this.productForm.controls;
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
        this.images.push(image.dataUrl);
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
        this.images.push(image.dataUrl);
        console.log('Photo selected:', image);
      }
    } catch (error) {
      console.error('Error selecting photo:', error);
    }
  }

  // Remove an image from the list
  public removeImage(imageId: number): void {
    this.uploadedImages = this.uploadedImages.filter(img => img.id !== imageId);
    this.images = this.uploadedImages.map(img => img.src);
    console.log('Image removed');
  }

  /**
   * Add the product using the ProductService
   */
  public onAddProduct(): void {
    if (this.productForm.invalid) {
      Object.keys(this.productForm.controls).forEach(key => {
        this.productForm.get(key)?.markAsTouched();
      });
      console.log('Form is invalid');
      return;
    }

    const formValue = this.productForm.value;
    const newProduct = this.productService.addProduct({
      name: formValue.name,
      price: formValue.price,
      description: formValue.description,
      imageUrl: this.uploadedImages.length > 0 ? this.uploadedImages[0].src : ''
    });

    console.log('Product added:', newProduct);
    this.router.navigate(['/shop-owner/products']);
  }

  public publishProduct(): void {
    this.onAddProduct();
  }

  public saveDraft(): void {
    console.log('Saving product as draft');
    // Add your draft save logic here
  }
}
