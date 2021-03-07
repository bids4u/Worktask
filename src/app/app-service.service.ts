import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  public data=[]
  constructor() { }
  pushData(bal){
    this.data.push(bal);
    return bal;
  }
}
