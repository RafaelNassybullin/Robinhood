import {HostListener, Injectable} from "@angular/core";


@Injectable({providedIn: 'root'})
export class BooleanService {

  public t2: boolean = false




  toggle() {
    this.t2 = !this.t2
    console.log(this.t2);
  }


}
