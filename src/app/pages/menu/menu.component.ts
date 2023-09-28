
import { Component } from '@angular/core';
import { Orders } from 'src/app/interface/orders';
import { OrderService } from 'src/app/service/orderService.service';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  prodottiOrdinati: any[] = [];  //inizializziamo paniniSelezionati in un array vuoto
  totaleOrdine: number = 0;

  constructor(private orderService: OrderService) {


  }


  lista = {
    panini: [
      {
        id: 0,
        nome: 'BURGER',
        descrizione: 'HAMBURGER DELLA CASA -200gr <br> INSALATA ICEBERG <br> POMODORI <br> KETCHUP <br> MAIONESE',
        prezzo: 12,
        img: 'assets/img/panini/burge.png'
      },
      {
        id: 1,
        nome: 'NONNA ASSUNTA',
        descrizione: 'HAMBURGER DELLA CASA - 200 gr <br> PATATE AL FORNO CON CIPOLLA <br> PROVOLA AFFUMICATA <br> MAIONESE AL PEPE',
        prezzo: 14,
        img: 'assets/img//panini/nonna_assunta.png'
      },
      {
        id: 2,
        nome: 'HADOKEN',
        descrizione: 'HAMBURGER DELLA CASA - 200 gr<br>FORMAGGIO EMMENTAL FUSO<br>BACON CROCCANTE<br>CIPOLLA CARAMELLATA OLD SCHOOL<br>BURRO DI ARACHIDI<br>ARACHIDI SALATI',
        prezzo: 15,
        img: 'assets/img/panini/hadoken.png'
      },
      {
        id: 3,
        nome: 'DJANGO',
        descrizione: 'HAMBURGER DELLA CASA - 200 gr <br>PROVOLA AFFUMICATA<br>BACON CROCCANTE<br>CIPOLLA ROSSA IN AGRODOLCE<br>ANELLONE DI CIPOLLA<br> MAIONESE<br>SALSA BARBECUE',
        prezzo: 15,
        img: 'assets/img/panini/django.png'
      },
      {
        id: 4,
        nome: 'LOS POLLOS',
        descrizione: 'POLLO FRITTO CROCCANTE<br>INSALATA ICEBERG<br>MAIONESE AL LIME E PEPE ROSA',
        prezzo: 13,
        img: 'assets/img/panini/los_pollos.png'
      },
      {
        id: 5,
        nome: 'SMASHED ONE',
        descrizione: 'DOPPIO HAMBURGER DELLA CASA da 100 gr. l\'uno<br>FORMAGGIO EMMENTAL FUSO<br>BACON CROCCANTE<br>SALSA SEGRETISSIMA',
        prezzo: 13,
        img: 'assets/img/panini/smashed_one.png'
      },
      {
        id: 6,
        nome: 'SMASHED ONE DOPPIO BACON',
        descrizione: 'DOPPIO HAMBURGER DELLA CASA da 100 gr. l\'uno<br>FORMAGGIO EMMENTAL FUSO<br>DOPPIO BACON CROCCANTE<br>SALSA SEGRETISSIMA',
        prezzo: 14,
        img: 'assets/img/panini/smashed_one_doppio_bacon.png'
      },
      {
        id: 7,
        nome: 'SMASHED ONE EXTR3ME',
        descrizione: 'TRIPLO HAMBURGER DELLA CASA da 100 gr. l\'uno<br>FORMAGGIO EMMENTAL FUSO<br>BACON CROCCANTE<br>SALSA SEGRETISSIMA',
        prezzo: 15,
        img: 'assets/img/panini/smashed_one_extr3me.png'
      },
      {
        id: 8,
        nome: 'DIEGO ARMANDO MASARDONA',
        descrizione: 'CICOLI NAPOLETANI PIASTRATI (con sale e pepe)<br>PROVOLA IMPANATA E FRITTA<br>CREMA DI POMODORINI ARROSTO<br>RICOTTA SALE E PEPE<br>BASILICO',
        prezzo: 14,
        img: 'assets/img/panini/diego_armando_masardona.png'
      },

    ],
    bibite: [
      {
        id: 9,
        nome: 'ACQUA',
        descrizione: 'NATURALE 50 cl',
        prezzo: 2,
        img: 'assets/img/bibite/acqua-naturale.png'
      },
      {
        id: 10,
        nome: 'ACQUA',
        descrizione: 'FRIZZANTE 50 cl',
        prezzo: 2,
        img: 'assets/img/bibite/acqua-frizzante.png'
      },
      {
        id: 11,
        nome: 'COCA COLA',
        descrizione: '33 cl',
        prezzo: 4,
        img: 'assets/img/bibite/coca_cola.png'
      },
      {
        id: 12,
        nome: 'FANTA',
        descrizione: '33 cl',
        prezzo: 4,
        img: 'assets/img/bibite/fanta.png'
      },
      {
        id: 13,
        nome: 'SPRITE',
        descrizione: '33 cl',
        prezzo: 4,
        img: 'assets/img/bibite/sprite.png'
      },
      {
        id: 14,
        nome: 'BIRRA PAULANER WEISS  ',
        descrizione: 'lager - 50 cl',
        prezzo: 5,
        img: 'assets/img/bibite/PAULANER_WEISS_-_lager_50_cl.png'
      },
      {
        id: 15,
        nome: 'BIRRA PAULANER MÜNCHNER HELL',
        descrizione: 'lager strong - 33 cl',
        prezzo: 6,
        img: 'assets/img/bibite/PAULANER_MÜNCHNER_HELL_-_lager_strong_33_cl.png'
      },
      {
        id: 16,
        nome: 'BIRRA PAULANER SALVATOR',
        descrizione: 'lager strong doppelbock 33 cl',
        prezzo: 7,
        img: 'assets/img/bibite/PAULANER_SALVATOR_-_lager_strong_doppelbock_33_cl.png'
      },

    ]

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

    this.prodottiOrdinati.forEach(prodotto => {
      newOrder.order.push(prodotto.nome)
    })

    this.orderService.addOrder(newOrder);

  }
}
