import { Component, OnInit, NgModule } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Orders } from 'src/app/interface/orders';
import { OrderService } from 'src/app/service/orderService.service';


@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.scss'],
})

export class OrderConfirmedComponent implements OnInit {

 
  order! :  Orders | null;
  constructor(private activatedRoute: ActivatedRoute, private orderService: OrderService) {

  }

  ngOnInit(): void {

    const orderId =  this.activatedRoute.snapshot.paramMap.get('newOrderId');
    this.order = this.orderService.findOrderById(parseInt(orderId!))
    console.log(this.order)
  }



}
