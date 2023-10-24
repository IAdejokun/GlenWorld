import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading = true;
  
  show(){
    this.isLoading = true;
  }

  hide(){
    this.isLoading = false;
  }

  
  constructor() { }
}
