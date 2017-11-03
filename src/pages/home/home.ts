import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  creator_profile = 'https://github.com/guillexpa';  

  constructor(public navCtrl: NavController) {

  }

}
