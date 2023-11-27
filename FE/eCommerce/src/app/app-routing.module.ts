import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DetailsProjComponent } from './pages/details-proj/details-proj.component';
import { CartComponent } from './pages/cart/cart.component';
import { ProductComponent } from './pages/product/product.component';

const routes: Routes = [
  {path: '', component: HomePageComponent },
  {path: 'details-proj', component: DetailsProjComponent },
  {path: 'carrello', component: CartComponent },
  {path: 'prodotti', component: ProductComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
