import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


//Angular Materials
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
// import {FormControl} from '@angular/forms';



//Pages
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CucinaComponent } from './pages/cucina/cucina.component';
import { DialogOrderComponent } from './components/dialog-order/dialog-order.component';
import { OrderConfirmedComponent } from './pages/order-confirmed/order-confirmed.component';

//Service
import { OrderService } from './service/orderService.service';





@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MenuComponent,
    CucinaComponent,
    DialogOrderComponent,
    OrderConfirmedComponent,
  
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatRadioModule,
    FormsModule,
    MatDialogModule,
    MatInputModule,
    MatNativeDateModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatSelectModule,
    MatFormFieldModule,
    ReactiveFormsModule
    // FormControl
  ],

  providers: [
    OrderService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
