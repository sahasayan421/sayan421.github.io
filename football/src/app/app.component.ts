import { Component, OnInit } from '@angular/core';
import { Router, Event as NavigationEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'football'; 

  constructor(public router: Router){
  }

  ngOnInit(){
  }
}
