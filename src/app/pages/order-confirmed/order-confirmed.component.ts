import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators, } from '@angular/forms';
import { Payment } from 'src/app/payment';


@Component({
  selector: 'app-order-confirmed',
  templateUrl: './order-confirmed.component.html',
  styleUrls: ['./order-confirmed.component.scss'],
})

export class OrderConfirmedComponent {
topics= ['Visa', 'Mastercard', 'Maestro'];

paymentModel = new Payment('','Marco Rossi', 8786543765414567, '09/29', 675)


//   cvvControl = new FormControl('' ,[
//     Validators.required,
//     Validators.minLength(3),
//     Validators.maxLength(3),
//     // Validators.pattern('^[0-9]*$'),

// ]);
}
