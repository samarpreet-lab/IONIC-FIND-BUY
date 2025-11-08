import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { IonicModule, ModalController } from '@ionic/angular';
import { EditProductModalComponent } from './edit-product-modal.component';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, EditProductModalComponent]
})
export class ProductsPage implements OnInit {
  searchTerm: string = '';
  // Categories for Amritsar Punjabi restaurant
  categories = ['Breads', 'Main Curries', 'Street Food', 'Sweets', 'Beverages', 'Sides'];

  // Comprehensive product list for Amritsar Punjabi restaurant with realistic INR prices
  // Metric units included in product names; stock field removed from display
  restaurantPhone = '+91-98762-34567'; // Amritsar contact number
  restaurantName = 'Desi Darbar - Amritsar';

  myProducts = [
    {
      id: 'p1',
      name: 'Amritsari Kulcha (300g)',
      category: 'Breads',
      place: 'Amritsar',
      price: 120.0,
      image: 'assets/amritsari-kulcha.avif',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p2',
      name: 'Makki di Roti with Butter (2 pcs, 200g)',
      category: 'Breads',
      place: 'Amritsar',
      price: 80.0,
      image: 'assets/makki-roti.jpeg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p3',
      name: 'Sarson da Saag (500ml)',
      category: 'Main Curries',
      place: 'Amritsar',
      price: 180.0,
      image: 'assets/sarson-saag.jpg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p4',
      name: 'Punjabi Chole Bhature (400g)',
      category: 'Main Curries',
      place: 'Amritsar',
      price: 150.0,
      image: 'assets/chole-bhature.jpeg',
      inStock: true,
      hasSale: true
    },
    {
      id: 'p5',
      name: 'Paneer Tikka Masala (350g)',
      category: 'Main Curries',
      place: 'Amritsar',
      price: 220.0,
      image: 'assets/paneer-tikka-masala.webp',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p6',
      name: 'Butter Chicken (400g)',
      category: 'Main Curries',
      place: 'Amritsar',
      price: 240.0,
      image: 'assets/butter-chicken.jpeg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p7',
      name: 'Amritsari Fish Tawa (300g)',
      category: 'Street Food',
      place: 'Amritsar',
      price: 280.0,
      image: 'assets/amritsari-fish.jpeg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p8',
      name: 'Samosa with Chutney (4 pcs, 250g)',
      category: 'Street Food',
      place: 'Amritsar',
      price: 50.0,
      image: 'assets/samosa.avif',
      inStock: true,
      hasSale: true
    },
    {
      id: 'p9',
      name: 'Gujhiya (150g)',
      category: 'Sweets',
      place: 'Amritsar',
      price: 200.0,
      image: 'assets/gujhiya.webp',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p10',
      name: 'Jalebi and Fafda (300g)',
      category: 'Sweets',
      place: 'Amritsar',
      price: 90.0,
      image: 'assets/jalebi-fafda.jpeg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p11',
      name: 'Kheer (400ml)',
      category: 'Sweets',
      place: 'Amritsar',
      price: 110.0,
      image: 'assets/kheer.jpeg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p12',
      name: 'Punjabi Lassi (500ml)',
      category: 'Beverages',
      place: 'Amritsar',
      price: 70.0,
      image: 'assets/punjabi-lassi.avif',
      inStock: true,
      hasSale: true
    },
    {
      id: 'p13',
      name: 'Masala Lassi (500ml)',
      category: 'Beverages',
      place: 'Amritsar',
      price: 75.0,
      image: 'assets/masala-lassi.jpg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p14',
      name: 'Amritsari Kulfi (80g)',
      category: 'Beverages',
      place: 'Amritsar',
      price: 60.0,
      image: 'assets/kulfi.avif',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p15',
      name: 'Raita (300ml)',
      category: 'Sides',
      place: 'Amritsar',
      price: 40.0,
      image: 'assets/raita.jpeg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p16',
      name: 'Punjabi Pickle (250g)',
      category: 'Sides',
      place: 'Amritsar',
      price: 120.0,
      image: 'assets/pickle.jpeg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p17',
      name: 'Ghee (500ml)',
      category: 'Sides',
      place: 'Amritsar',
      price: 450.0,
      image: 'assets/ghee.jpeg',
      inStock: true,
      hasSale: false
    },
    {
      id: 'p18',
      name: 'Langar Halwa Puri (200g)',
      category: 'Street Food',
      place: 'Amritsar',
      price: 130.0,
      image: 'assets/langar-halwa.jpg',
      inStock: true,
      hasSale: false
    }
  ];

  showSearch: boolean = false;

  constructor(
    private router: Router,
    private modalController: ModalController,
    private productService: ProductService
  ) { }

  ngOnInit() {
  }

  /**
   * Lifecycle hook to refresh product list when view is about to enter
   */
  ionViewWillEnter(): void {
    this.myProducts = this.productService.getProducts() as any[];
  }

  addProduct(): void {
    this.router.navigate(['/shop-owner/add-product']);
  }

  editProduct(productId: string): void {
    const product = this.myProducts.find(p => p.id === productId);
    if (product) {
      this.openEditModal(product);
    }
  }

  async openEditModal(product: any): Promise<void> {
    const modal = await this.modalController.create({
      component: EditProductModalComponent,
      componentProps: {
        product: { ...product },
        categories: this.categories
      },
      cssClass: 'edit-product-modal',
      backdropDismiss: true
    });

    await modal.present();
  }

  hideProduct(productId: string): void {
    console.log('Hiding product:', productId);
  }

  archiveProduct(productId: string): void {
    console.log('Archiving product:', productId);
  }

  toggleStock(product: any): void {
    console.log('Toggling stock for:', product.name);
  }

  /**
   * Delete a product using the ProductService and refresh the list
   */
  deleteProduct(id: string): void {
    this.productService.deleteProduct(id);
    // Refresh the local list
    this.myProducts = this.productService.getProducts() as any[];
    console.log('Product deleted:', id);
  }

  onSearchClicked(): void {
    // Toggle search box visibility
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      // Clear search when closing
      this.searchTerm = '';
    }
  }

  onSearchChange(): void {
    console.log('Searching for:', this.searchTerm);
  }

  // Filter products based on search term
  getFilteredProducts(): any[] {
    if (!this.searchTerm.trim()) {
      return this.myProducts;
    }
    
    const term = this.searchTerm.toLowerCase();
    return this.myProducts.filter(product =>
      product.name.toLowerCase().includes(term) ||
      product.category.toLowerCase().includes(term) ||
      product.place.toLowerCase().includes(term)
    );
  }

  getActiveItemsCount(): number {
    return this.getFilteredProducts().filter(p => p.inStock).length;
  }

  getCategoriesCount(): number {
    return this.categories.length;
  }
}
