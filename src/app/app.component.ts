import { Component, OnInit } from '@angular/core';
import { OrderService } from './service/orderService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'restaurant';

  constructor(private orderService: OrderService) {

  }
  ngOnInit(): void {
    this.orderService.startTimer()
  }


}
