import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeModule } from '../home/home.module';
import { ProductsModule } from '../products/products.module';
import { AuthModule } from '../core/auth/auth.module';
import { LocalStorageService } from '../services/local-storage.service';

@NgModule({
  imports: [
    CommonModule,
    ProductsModule,
    AuthModule,
    HomeModule
  ],
  providers: [LocalStorageService],
  declarations: []
})

export class SharedModule { }
