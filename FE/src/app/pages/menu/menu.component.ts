import { HttpClient } from '@angular/common/http';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Orders } from 'src/app/interface/orders';
import { OrderService } from 'src/app/service/orderService.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  prodottiOrdinati: any[] = [];  //inizializziamo paniniSelezionati in un array vuoto
  totaleOrdine: number = 0;
  menu: any;


  constructor(private orderService: OrderService, private router: Router, private http: HttpClient) {
    // this.router.navigate(['./order-confirmed']);

  }


  ngOnInit(): void {
    this.orderService.getMenu().subscribe((res: any) => {
      console.log('response di get menu', res)
      this.menu = res.updatedMenu;

      this.menu.panini.forEach((panino: any) => {
        panino.mostraDescrizione = false;
      });
    });


  }


  selezionaPanino(elOrdinato: any) { //funzione
    this.prodottiOrdinati.push(elOrdinato);
    console.log(this.prodottiOrdinati);
    this.calcolaTotale();

  }

  removeProduct(prodotto: any) {

    const index = this.prodottiOrdinati.indexOf(prodotto);
    if (index !== -1) {
      this.prodottiOrdinati.splice(index, 1);
      this.calcolaTotale();
    }
   /*  this.orderService.removeOrder(prodotto.id).subscribe((res: any) => {
      console.log('response di remove order', res)
    }); */

  }

  calcolaTotale() {
    this.totaleOrdine = this.prodottiOrdinati.reduce((total, prodotto) => total + prodotto.prezzo, 0);

  }

  sendOrder() {
    let time = new Date();
    let formattedTime = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

    let newOrder: Orders = {
      id: Math.floor(Math.random() * 90000) + 10000,
      order: [],
      table: "3",
      hour: formattedTime,
      status: "Awaiting",

    };
    this.prodottiOrdinati.forEach(prodotto => {
      newOrder.order.push(prodotto.nome);
    });

    this.orderService.submitOrder(newOrder).subscribe((res: any) => {
      console.log('response di submit order', res.ordersUpdated); //nuovo array
      this.orderService.setOrders(res.ordersUpdated)

      
      this.router.navigate(['order-confirmed', newOrder.id]);
    });
  }

  toggleDescrizione(panino: any) {
    panino.mostraDescrizione = !panino.mostraDescrizione;
  }

  currentDate: Date = new Date();
 
}
