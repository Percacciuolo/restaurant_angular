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
      this.menu = res.updatedMenu
    });
    

  }


  selezionaPanino(elOrdinato: any) { //funzione
    this.prodottiOrdinati.push(elOrdinato);
    console.log(this.prodottiOrdinati);
    this.calcolaTotale();

  }

  eliminaPanino(prodotto: any) {
    const index = this.prodottiOrdinati.indexOf(prodotto);
    this.prodottiOrdinati.splice(index, 1);
    this.calcolaTotale();
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

    this.orderService.submitOrder(newOrder).subscribe((res: any) => {
      // const updatedOrder = { ...newOrder };
      // this.prodottiOrdinati.forEach(prodotto => {
      //   updatedOrder.order.push(prodotto);
      // });
      // res.ordersUpdated.push(updatedOrder);
      console.log('response di submit order', res.ordersUpdated);
    });


    // this.router.navigate(['order-confirmed']);

  }




}