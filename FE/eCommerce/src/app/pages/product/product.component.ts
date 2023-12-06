import { Component, OnInit } from '@angular/core';
import { ProductInterface } from 'src/app/interface/product.interface';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {


  products: ProductInterface[] = [

    {
      id: 0,
      brand: "Alexander McQueen",
      description: "Giubbino biker in pelle bianca con colletto a dente e tasche chiuse da zip argento.",
      price: 3.690,
      size: ["52", "54", "56"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---Alexander_McQueen---626381Q5LDS9011_c9bdf82c-fe5c-4363-8fdc-b355871ba532.jpg",
    },
    {
      id: 1,
      brand: "Alexander McQueen",
      description: "Maglione nero in misto lana e chashmere con teschio e firma intarsiati sul davanti.",
      price: 890,
      size: ["S", "M"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---alexander_mcqueen---760760Q1XII1011.jpg",
    },
    {
      id: 2,
      brand: "Alexander McQueen",
      description: "Jeans blu a gamba ampia in denim di cotone con tasca in pelle di agnello sul retro.",
      price: 990,
      size: ["46", "48"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---alexander_mcqueen---726593QUZ010903_4cb4f3d4-af87-483a-9ef9-71aea473673b.jpg",
    },
    {
      id: 3,
      brand: "Burberry",
      description: "Giacca beige archivio in nylon con motivo a quadri Burberry Check all-over.",
      price: 1.250,
      size: ["M", "XL"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---burberry---8070347A7028_583fa795-cba2-4cbf-a471-852224ef3476.jpg",
    },
    {
      id: 4,
      brand: "Burberry",
      description: "Polo a maniche corte in piqué di cotone navy sfumato con colletto Check.",
      price: 560,
      size: ["S"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---burberry---8072661B3590_9d2bd6c5-ba38-435d-98cd-20335f504197.jpg",
    },
    {
      id: 5,
      brand: "Burberry",
      description: "T-shirt oversize in jersey di cotone bianco con logo a contrasto sul davanti.",
      price: 390,
      size: ["XL", "XXL"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---burberry---8055309A1464_ce67d466-bf33-4e8f-b901-3c7dd6e6cf23.jpg",
    },
    {
      id: 6,
      brand: "Etro",
      description: "Camicia rosa a maniche lunghe in cotone con micro motivi cravatteria all-over.",
      price: 350,
      size: ["46", "52"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---etro---129085723650_4d21706f-dcb5-4faf-adeb-fc7e0248e13e.jpg",
    },
    {
      id: 7,
      brand: "Etro",
      description: "Cappotto over in lana jacquard beige con motivi geometrici e bordatura in velluto.",
      price: 3.500,
      size: ["S", "M", "L"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---etro---1C5050229800_d1e58d7d-ccd6-4d32-a62b-24041eccd36b.jpg",
    },
    {
      id: 8,
      brand: "Etro",
      description: "Dolcevita blu in maglia di lana vergine con logo ricamato sul petto.",
      price: 520,
      size: ["S", "M", "L", "XL"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---etro---1N9349294200_7273c029-f573-45a4-8c97-cabda7fd4e84.jpg",
    },
    {
      id: 9,
      brand: "Saint Laurent",
      description: "Portafogli nero in pelle stampa coccodrillo con logo in metallo",
      price: 445,
      size: ["UNI"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---saint_laurent---485630C9H0U1000.jpg",
    },
    {
      id: 10,
      brand: "Saint Laurent",
      description: "Sneakers Court Classic SL/06 in pelle e tela con dettagli sdruciti e logo.",
      price: 575,
      size: ["39", "41"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---saint_laurent---69078904GAA1000_203a93b7-d2e7-42c7-b5f5-f277cc704e43.jpg",
    },
    {
      id: 11,
      brand: "Saint Laurent",
      description: "T-shirt nera a girocollo in jersey di cotone leggero con logo stampato sul fronte.",
      price: 320,
      size: ["S", "M", "L", "XL"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---saint_laurent---464572YB2DQ1000_369aa75a-75d9-440b-a4fd-c411c96542c9.jpg",
    },
    {
      id: 12,
      brand: "Tom Ford",
      description: "Cappotto doppiopetto stile militare in lana vergine e cashmere nero con dettagli in pelle.",
      price: 4.590,
      size: ["52"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---saint_laurent---464572YB2DQ1000_369aa75a-75d9-440b-a4fd-c411c96542c9.jpg",
    },
    {
      id: 13,
      brand: "Tom Ford",
      description: "Jeans slim fit in denim di cotone grigio con etichetta logata sul retro.",
      price: 890,
      size: ["46", "50"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---tom_ford---DPS001DMC026F23IG670.jpg",
    },
    {
      id: 14,
      brand: "Tom Ford",
      description: "Camicia smoking bianco ottico in cotone e seta con plastron plissé e collo diplomatico.",
      price: 850,
      size: ["40", "42", "44"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---tom_ford---HFCL02CSS03AW001.jpg",
    },
    {
      id: 15,
      brand: "Tom Ford",
      description: "Felpa girocollo a maniche corte in cotone verde militare con etichetta logo.",
      price: 750,
      size: ["48"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---tom_ford---JCS006JMC012F23FG799_a724bdc7-7d83-4367-bb54-edce9a4c7577.jpg",
    },
    {
      id: 16,
      brand: "Tom Ford",
      description: "Cardigan grigio in maglia melange di cashmere con collo a scialle e tasche a toppa.",
      price: 2.250,
      size: ["46", "50", "54"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---tom_ford---KLL003YMK019F23ZGREY_5a81c47d-a7df-496c-939a-9b34329c7d3b.jpg",
    },
    {
      id: 17,
      brand: "Tom Ford",
      description: "Cintura reversibile color cioccolato e nero in pelle di vitello a grana con fibbia a T.",
      price: 590,
      size: ["UNI"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---tom_ford---TB178LCL220G3BN18_2_P.jpg",
    },
    {
      id: 18,
      brand: "Tom Ford",
      description: "Giacca bomber nera in nappa lucida con imbottitura in piuma e finiture in maglia.",
      price: 6.990,
      size: ["50", "52", "54"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---tom_ford---LBD003LMN008F23LB999_4f312d0e-4f96-4568-88ce-a7ca1f9e9cb6.jpg",
    },
    {
      id: 19,
      brand: "Polo Ralph Lauren",
      description: "Camicia multicolore in cotone con motivo tartan all-over e due tasche sul davanti.",
      price: 400,
      size: ["S"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---polo_ralph_lauren---710916762001_356e6d52-0086-4dbe-af9b-f9773ce7cb5f.jpg",
    },
    {
      id: 20,
      brand: "Polo Ralph Lauren",
      description: "Piumino con cappuccio in ripstop idrorepellente di poliestere riciclato con stampa patchwork.",
      price: 600,
      size: ["S", "M"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---polo_ralph_lauren---710916821001_e388e339-53e9-4e25-be3b-83a2e96f1e78.jpg",
    },
    {
      id: 21,
      brand: "Polo Ralph Lauren",
      description: "Polo custom slim-fit bianca in piqué di cotone con ricamo Polo Bear sul petto.",
      price: 180,
      size: ["S", "M", "L", "XL"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---polo_ralph_lauren---710853312021_fb6052a3-f29c-49f3-ad0b-79a429ee3312.jpg",
    },
    {
      id: 22,
      brand: "Polo Ralph Lauren",
      description: "Pullover girocollo color oceano in maglia di misto lana e pelo di alpaca con ricamo Pony.",
      price: 250,
      size: ["L"],
      img: "https://michelefranzesemoda.com/cdn/shop/products/A23---polo_ralph_lauren---710918805004.jpg",
    }
  ]

  brands: string[] = []
  sizes: string[] = []

  ngOnInit(): void {

    this.populateBrands();
    this.populateSizes();

  }
  populateBrands() {
    for (const product of this.products) {
      if (!this.brands.includes(product.brand)) {
        this.brands.push(product.brand);

      }
    }
  }

  populateSizes() {
    for (const product of this.products) {
      for(const size of product.size){
        if(!this.sizes.includes(size)){
          this.sizes.push(size)

        }
      }
      
    }
  }


}


