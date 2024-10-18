import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';  // Импорт RouterModule для маршрутизации

import { AppComponent } from './app/app.component';
import { AppRoutingModule } from './app/app.routing.module';
import { ProductsModule } from './products/products.module';  // Импорт модуля маршрутизации

@NgModule({
  declarations: [
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,  // Импортируем AppRoutingModule
    RouterModule, ProductsModule       // Импортируем RouterModule, если нужно
  ],
  providers: [],
   // Bootstrap компонента
})
export class AppModule { }
