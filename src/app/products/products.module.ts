import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { ProductsService } from './shared/products.service';
import { ProductResolveService } from './components/detail-card/product-resolve.service';
import { DetailCardComponent } from './components/detail-card/detail-card.component';
import { TypeCategoryPipe } from './pages/category/type-category.pipe';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';
import { environment } from '../../environments/environment';



@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule
  ],
  declarations: [
    DashboardComponent,
    DetailCardComponent
  ],
  providers: [
    ProductsService,
    ProductResolveService,
    {provide: 'baseUrl', useValue: environment.baseUrl}
  ]
})
export class ProductsModule { }
