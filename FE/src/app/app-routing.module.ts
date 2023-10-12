import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { CucinaComponent } from './pages/cucina/cucina.component';
import { OrderConfirmedComponent } from './pages/order-confirmed/order-confirmed.component';
import { ExArticleComponent } from './pages/ex-article/ex-article.component';


const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'menu', component: MenuComponent },
  {path: 'manager-sala', component: CucinaComponent},
  {path: 'order-confirmed/:newOrderId', component: OrderConfirmedComponent},
  {path: 'ex-articles', component: ExArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
