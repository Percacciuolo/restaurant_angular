import { MatInputModule } from '@angular/material/input';
import { Component, Inject } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef, MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-order',
  templateUrl: './dialog-order.component.html',
  styleUrls: ['./dialog-order.component.scss']
})
export class DialogOrderComponent {
        
  hour = 0;
  minute = 0;
  second = 0;

  constructor(
    public dialogRef: MatDialogRef<DialogOrderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) { }

  onNoClick(): void {
    this.data.timer = {                                                   
      hour: this.hour,
      minute: this.minute,
      second: this.second
    }
    this.dialogRef.close(this.data);
  }
 
}
