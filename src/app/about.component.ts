
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title = 'About Me';

    ngOnInit(): void {
        
        console.log("You are on the about page");
    }


}