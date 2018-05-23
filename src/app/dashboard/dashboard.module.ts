import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { DashboardComponent } from './dashboard.component';
import { ProductsService } from '../model/products.service';
import { AppRoutingModule } from '../app-routing.module';
import { DetailCardModule } from '../detail-card/detail-card.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [BrowserModule , AppRoutingModule, DetailCardModule],
  providers: [ProductsService]
})
export class DashboardModule { }
