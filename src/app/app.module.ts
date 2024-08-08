import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { AuthModule } from './features/auth/auth.module';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { CoreModule } from './core/core.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './features/dashboard/dashboard.component';
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, MatIconModule, BrowserAnimationsModule, DashboardModule],
  providers: [provideAnimationsAsync(), provideNativeDateAdapter()],
  bootstrap: [AppComponent],
})
export class AppModule {}
