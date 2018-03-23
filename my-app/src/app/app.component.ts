import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.scss',
    '../assets/css/ionicons.min.css'
  ]
})
export class AppComponent {
  title = 'Jorge Sepúlveda';

  //available banner backgrounds
  bannerBackgrounds: string[] = [
    'assets/images/background.jpg',
    'assets/images/background2.jpg'
  ]
  //randomizes the array and selects one.
  randomBackground: string = this.bannerBackgrounds[Math.floor(Math.random() * this.bannerBackgrounds.length)];
  backgroundStyle = {
    'background-image':"url('"+this.randomBackground+"')"
  }
}
