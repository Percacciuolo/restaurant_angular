import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from 'src/app/service/orderService.service';



@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.scss'],
})

export class OrderConfirmedComponent implements OnInit{
orderId: string | null= null; //varibile per memorizzare l'id dell'ordine preso dall'url
order: any; //questa variabile utulizzata per memorizzare l'oggetto ordine corrispondente all'id recuperato

constructor(private route: ActivatedRoute, private orderService: OrderService){}

ngOnInit(): void {
  this.orderId = this.route.snapshot.paramMap.get('orderId');
  console.log(this.orderId)
  // this.route.paramMap.subscribe((params)=>{
  //   this.orderId = params.get('orderId');
  //   if(this.orderId !== ""){
  //     this.order = this.orderService.getOrderById(parseInt(this.orderId));
  //   }
    
  // })
}
}
