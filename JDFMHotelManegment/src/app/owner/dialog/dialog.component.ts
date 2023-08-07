import { Component } from '@angular/core';
import {  MatDialogRef  } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  //res = 'YES';
constructor(public dialogRef: MatDialogRef<DialogComponent> ,
   ){}


 

onNoClick(): void {
  this.dialogRef.close();
}

onYesClick(){
  this.dialogRef.close('YES');
}

}
