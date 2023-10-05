
import { Component, OnInit } from '@angular/core';

import { Orders } from 'src/app/interface/orders';
import { OrderService } from 'src/app/service/orderService.service';
import { DialogOrderComponent } from 'src/app/components/dialog-order/dialog-order.component';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule} from '@angular/material/dialog';


@Component({
  selector: 'app-cucina',
  templateUrl: './cucina.component.html',
  styleUrls: ['./cucina.component.scss'],

})
export class CucinaComponent implements OnInit {

  orders: any;

  constructor(private orderService: OrderService, public dialog: MatDialog) { //nelle parentesi tonde si dichiarano i servizi
    
  }

  ngOnInit(): void {
    this.orderService.getOrders().subscribe((res: any) => {
      console.log('response di get order', res)
      this.orders= res.updatedMenu;
      
      console.log(this.orders);
    });
     
    console.log(this.orders);
  }

  changeStatus(orderId: number, orderStatus: string) {
    this.orders = this.orderService.changeStatus(orderId, orderStatus);
  }

  openDialogTimer(orderId : number){
    const dialogRef = this.dialog.open(DialogOrderComponent, {
      data: {orderId : orderId},
    });

    dialogRef.afterClosed().subscribe(data => {
      this.orders = this.orderService.addTimerToOrder(data);
    });
  
  }
};

