import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ThemeProvider} from '../../providers/theme/theme'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  selectedTheme: String;
  constructor(public navCtrl: NavController,public theme:ThemeProvider) {
    //Subscribe to the result of getActiveTheme; When the result changes, the new value will be passed to this subscriber.

    this.theme.getActiveTheme().subscribe(val => this.selectedTheme = val);
    
  }


  toggleAppTheme() {
    if (this.selectedTheme === 'dark-theme') {
      this.theme.setActiveTheme('light-theme');
    } else {
      this.theme.setActiveTheme('dark-theme');
    }
  }
 

}
