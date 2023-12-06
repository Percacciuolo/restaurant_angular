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
<<<<<<< HEAD
import { ContactsComponent } from './pages/contacts/contacts.component';

/* COMPONENTS ANGULAR MATERIALS */

import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
=======
import { ProductComponent } from './pages/product/product.component';




>>>>>>> b034977824d53d257204c6ca3e6ac3b4ea5e14f4



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DetailsProjComponent,
    CartComponent,
    CardProductComponent,
<<<<<<< HEAD

=======
    ProductComponent
>>>>>>> b034977824d53d257204c6ca3e6ac3b4ea5e14f4
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
<<<<<<< HEAD
    ContactsComponent,
    MatInputModule,
    MatIconModule, 
    MatButtonModule,
    MatTabsModule
=======
    MatIconModule
>>>>>>> b034977824d53d257204c6ca3e6ac3b4ea5e14f4
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
