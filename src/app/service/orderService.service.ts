
import { Injectable } from '@angular/core';
import { Orders } from '../interface/orders';

@Injectable({
    providedIn: 'root'
})

export class OrderService {
    private orders: Orders[]  //non visibile dai componenti esterni //order

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
        setInterval(this.timerHandler, 1000)
    }
    timerHandler() {
        console.log('timer handler works')
    }
}