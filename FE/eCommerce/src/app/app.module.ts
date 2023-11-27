import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//ANGULAR MATERIALS
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';

//COMPONENTI
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsProjComponent } from './pages/details-proj/details-proj.component';
import { CartComponent } from './pages/cart/cart.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { ProductComponent } from './pages/product/product.component';







@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsProjComponent,
    CartComponent,
    CardProductComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
