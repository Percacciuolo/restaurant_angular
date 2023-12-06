import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, ReactiveFormsModule, MatButtonModule, MatTabsModule, NgIf],
})

export class ContactsComponent {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  public isVisible = false;
  public isContactVisible = false;
  public phoneVisible = false;

  onClick() {
    this.isVisible = !this.isVisible;
  }

  contactMe() {
    this.isContactVisible = !this.isContactVisible;
  }

  phoneClick() {
    this.phoneVisible = !this.phoneVisible;
  }
}
