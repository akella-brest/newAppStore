import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {  RouterModule } from '@angular/router';
import { NgProgressModule } from 'ngx-progressbar';

import { ProductsService } from '../services/products.service';
import { ProductResolveService } from './pages/detail-card/product-resolve.service';
import { DetailCardComponent } from './pages/detail-card/detail-card.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    NgProgressModule
  ],
  declarations: [
    DashboardComponent,
    DetailCardComponent
  ],
  providers: [
    ProductsService,
    ProductResolveService
  ]
})

export class ProductsModule { }
