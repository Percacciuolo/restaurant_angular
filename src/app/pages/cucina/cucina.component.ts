
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

  orders: Orders[];

  constructor(private orderService: OrderService, public dialog: MatDialog) { //nelle parentesi tonde si dichiarano i servizi
    this.orders = [];
  }

  ngOnInit(): void {
    this.orders = this.orderService.getOrders()
    

  }

  changeStatus(orderId: number, orderStatus: string) {

    const index = this.orders.findIndex(order => order.id === orderId)
    console.log('change status:', this.orders[index]); //ritorna l'oggetto cliccato
    console.log('status update', index);

    if (index !== -1) {
      if (orderStatus === 'Done') {
        this.orders.splice(index, 1);
      } else {
        this.orders[index].status = orderStatus
        console.log('change status:', this.orders[index]);
      }
    }


  }

  openDialogTimer(orderId : number){
    const dialogRef = this.dialog.open(DialogOrderComponent, {
      data: {orderId : orderId},
    });

    dialogRef.afterClosed().subscribe(data =>   {
      const index = this.orders.findIndex(order => order.id === data.orderId)
      console.log('Result:', data);                   

      if (index !== -1){
        this.orders[index].timer = data.timer
      }
    });
  
  }
  
  // statusColor(status: string) {
  //   switch (status) {
  //     case 'Done':
  //       return 'green';
  //     case 'Progress':
  //       return 'yellow';
  //     case 'Awaiting':
  //       return 'red';
  //     default:
  //       return 'white';
  //   }

  // }
};

