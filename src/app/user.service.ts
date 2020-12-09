import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';

@Injectable()
export class UserService {

  isLogged = false;
  name = 'geto';
  constructor(private storage: StorageService) { }


  getName(): string{
    return this.name;
  }

  login():void{
   this.isLogged = true;
   this.storage.setItem('isLogged', true);
  }

  logout(): void{
    this.isLogged = false;
     this.storage.setItem('isLogged', false);
  }
}
