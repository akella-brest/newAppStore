import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { CallbackComponent } from './callback/callback.component';
import { CallToActionComponent } from './call-to-action/call-to-action.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './dashboard/dashboard.module';
import { CategoryModule } from './category/category.module';
import { HomeModule } from './home/home.module';
import { DetailCardModule } from './detail-card/detail-card.module';

@NgModule({
  declarations: [
    AppComponent,
    CallbackComponent,
    CallToActionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DashboardModule,
    CategoryModule,
    HomeModule,
    DetailCardModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
