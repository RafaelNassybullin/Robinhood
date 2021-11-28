import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  public toggle:boolean = false

public innerWidth: number = window.innerWidth;

  @HostListener('window:resize', ['$event'])
  onResize(event:any) {
    this.innerWidth = window.innerWidth;
  }


}
