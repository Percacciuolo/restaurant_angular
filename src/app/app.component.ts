import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderService } from './service/orderService.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'restaurant';

  constructor(private orderService: OrderService) {

  }
  ngOnInit(): void {
    this.orderService.startTimer()
  }

  ngOnDestroy(): void {
    this.orderService.destroyTimer();
  }


}
