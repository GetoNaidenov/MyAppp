import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})


export class HeaderComponent  implements OnInit{

  constructor(public userService: UserService) { 

  }
   ngOnInit(){
     
   }
   getName(){
     return this.userService.name;
   }

  loginHandler():void{
   this.userService.login();
  }
  logautHandler():void{
   this.userService.logout();
  }

}
