import { Component } from '@angular/core';
import {  MatDialogRef  } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  //res = 'YES';
  paneClass!: string;
constructor(public dialogRef: MatDialogRef<DialogComponent> ,
   ){
    this.paneClass = 'dialog-container'
   }


 

onNoClick(): void {
  this.dialogRef.close();
}

onYesClick(){
  this.dialogRef.close('YES');
}

}
