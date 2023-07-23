import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ownerhome',
  templateUrl: './ownerhome.component.html',
  styleUrls: ['./ownerhome.component.scss']
})
export class OwnerhomeComponent {

  constructor(private router: Router){

  }

  login(){
     this.router.navigateByUrl('owner/ownerLogin')
  }
  back(){
    this.router.navigateByUrl('home')
  }
}
