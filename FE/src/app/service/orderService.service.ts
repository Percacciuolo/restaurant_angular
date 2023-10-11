
import { Injectable } from '@angular/core';
import { Orders } from '../interface/orders';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    private orders: Orders[] = []; //abbiamo inizializzato i valori delle variabili //non visibile dai componenti esterni //order
    private timer: any;
    


    constructor(private http: HttpClient) {
    }

    setOrders(ordersArray: Orders[]) {
        this.orders = ordersArray;
    }

    getMenu() {
        return this.http.get('http://localhost:4000/api/mock/getMenu')
    }

    //fare un get
    getOrders() {
        return this.http.get('http://localhost:4000/api/mock/getOrders');
    }

    submitOrder(newOrder: Orders): Observable<any> {
        let body = {
            newOrder: newOrder
        }
        return this.http.post('http://localhost:4000/api/mock/submitOrder', body);
    }

    removeOrder(id: number): Observable<any> {
        return this.http.get(`http://localhost:4000/api/mock/deleteOrder/${id}`);
    }

    startTimer() {
        this.timer = setInterval(() => {
            this.timerHandler(this.orders)
        }, 1000)
    }

    destroyTimer() {
        clearInterval(this.timer);
    }
    timerHandler(orders: Orders[]) {
        // console.log('timer handler works', orders);
        if (orders.length > 0) {
            orders.forEach((order) => {
                if (order.status === 'Progress' && order.timer) {
                    if (order.timer.second > 0) {
                        order.timer.second--;
                    } else {
                        if (order.timer.minute > 0) {
                            order.timer.second = 59;
                            order.timer.minute--;
                        } else {
                            if (order.timer.hour > 0) {
                                order.timer.hour--;
                                order.timer.minute = 59
                            }
                            else {
                                console.log('timer scaduto', order.id);
                                const index = this.orders.findIndex((el: any) => order.id === el.id);
                                if (index !== -1) {
                                    this.orders.splice(index, 1);
                                }
                                // Fare chiamata api a removeOrder (GET)
                            }
                        }
                    }
                }
            })
        }
    }

    /*  Controlla su tutti gli elementi dell'array se sono in progress\. Se sono in progress
   controlla se esiste l'oggetto timer\, se esiste vai a diminuire di uno i secondi ma prima di farlo controlla che i
   secondi siano maggiori di zero O\,  qualora i secondi siano zero\ porta i secondi a 59 e vai a diminuire i minuti di uno
   ma solo se i minuti sono maggiori di zero. Qualora i minuti siano zero vale lo stesso discorso dei secondi. 
   Se tutti i valori (ore, minuti, secondi) sono zero l'oggetto order va eliminato dall'array 
   poichè considerato in status "done" */

   // Il timer dovrà essere aggiornato a BE, quindi integrare chiamata setTimer (POST) che prende come body { orderId , timer }
    addTimerToOrder(data: any) {
        const index = this.orders.findIndex(order => order.id === data.orderId)
        if (index !== -1) {
            this.orders[index].timer = data.timer
            this.orders[index].status = 'Progress'
        }
        return this.orders
    }

    changeStatus(orderId: number, orderStatus: string) {
        const index = this.orders.findIndex(order => order.id === orderId);
        if (index !== -1) {
            if (orderStatus === 'Done') {
                this.orders.splice(index, 1);
            } else {
                this.orders[index].status = orderStatus
                console.log('change status:', this.orders[index]);
            }
        }
        return this.orders
    }
}