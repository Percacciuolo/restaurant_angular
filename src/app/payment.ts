export class Payment {
    constructor( 
        public topic : string,
        public cardName: string,
        public cardNumber: number,
        public cardExpirationDate : string,
        public cardCVV : number,
        ) {}
}
