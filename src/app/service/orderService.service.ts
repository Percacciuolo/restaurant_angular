
import { Injectable } from '@angular/core';
import { Orders } from '../interface/orders';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    private orders: Orders[]  //non visibile dai componenti esterni //order
    private timer: any;


    constructor() {
        this.orders = [ // Dichiarazione di un array di ordini di tipo Orders

            {
                id: 0,
                order: ["BURGER", "LOS POLLOS", "BIRRA PAULANER SALVATOR", "FANTA",],
                table: "3",
                hour: "19:03:05",
                status: "Awaiting",
                timer: 0
            },
            {
                id: 1,
                order: ["BURGER", "BURGER", "BIRRA PAULANER SALVATOR", "ACQUA",],
                table: "5",
                hour: "19:19:09",
                status: "Awaiting",
                timer: 0
            },
            {
                id: 2,
                order: ["DJANGO", "NONNA ASSUNTA", "BIRRA PAULANER MÜNCHNER HELL", "FANTA"],
                table: "7",
                hour: "20:15:04",
                status: "Awaiting",
                timer: 0
            },
            {
                id: 3,
                order: ["SMASHED ONE", "DJANGO", "ACQUA", "BIRRA PAULANER MÜNCHNER HELL",],
                table: "1",
                hour: "20:08:10",
                status: "Awaiting",
                timer: 0
            },
            {
                id: 4,
                order: ["NONNA ASSUNTA", "SMASHED ONE EXTR3ME", "ACQUA", "COCA COLA",],
                table: "2",
                hour: "20:54:05",
                status: "Awaiting",
                timer: 0
            },
            {
                id: 5,
                order: ["LOS POLLOS", "DIEGO ARMANDO MASARDONA", "BIRRA PAULANER SALVATOR", "FANTA",],
                table: "9",
                hour: "20:45:07",
                status: "Awaiting",
                timer: 0
            },
            {
                id: 6,
                order: ["SMASHED ONE", "DJANGO", "BURGER", "SMASHED ONE EXTR3ME", "FANTA", "ACQUA", "BIRRA PAULANER MÜNCHNER HELL"],
                table: "4",
                hour: "20:42:05",
                status: "Awaiting",
                timer: 0
            }


        ] //abbiamo inizializzato i valori delle variabili
    }



    //fare un get
    getOrders() {
        return this.orders;
    }

    addOrder(newOrder: Orders) {
        this.orders.push(newOrder);
    } //aggiunge un nuovo ordine all'array

    startTimer() {
        this.timer = setInterval(this.timerHandler, 1000)
    }
    destroyTimer(){
        clearInterval(this.timer);
    }
    timerHandler() {
        console.log('timer handler works');
        /*  Controlla su tutti gli elementi dell'array se sono in progress. Se sono in progress
        controlla se esiste l'oggetto timer, se esiste vai a diminuire di uno i secondi ma prima di farlo controlla che i
        secondi siano maggiori di zero, qualora i secondi siano zero porta i secondi a 59 e vai a diminuire i minuti di uno
        ma solo se i minuti sono maggiori di zero. Qualora i minuti siano zero vale lo stesso discorso dei secondi. 
        Se tutti i valori (ore, minuti, secondi) sono zero l'oggetto order va eliminato dall'array 
        poichè considerato in status "done" */
    }

    addTimerToOrder(data: any){
        const index = this.orders.findIndex(order => order.id === data.orderId)
        if (index !== -1){
            this.orders[index].timer = data.timer
        }
        return this.orders
    }

    changeStatus(orderId: number, orderStatus: string){
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