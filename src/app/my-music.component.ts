
import { Component, Input, OnInit } from '@angular/core';
import {NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';


const now = new Date();

@Component({
  selector: 'my-music',
  templateUrl: './my-music.component.html',
  styleUrls: ['./my-music.component.css']
})
export class MyMusicComponent {
  title = 'My Music';

  model: NgbDateStruct;
  date: {year: number, month: number};
  

  selectToday() {
    this.model = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
  }

    ngOnInit(): void {
        
        console.log("You are on the about page");
    }


}