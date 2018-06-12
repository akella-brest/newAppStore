import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { StoreComponent } from './category.component';
import { TypeCategoryPipe } from './type-category.pipe';
import { ProductsService } from '../../../services/products.service';
import { NgProgressModule } from 'ngx-progressbar';

const routes: Routes = [
  {
    path: '',
    component: StoreComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    NgProgressModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    StoreComponent,
    TypeCategoryPipe
  ],
  exports: [RouterModule],
  providers: [ProductsService]
})
export class CategoryModule { }
