import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import {ThemeProvider} from '../providers/theme/theme'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  selectedTheme: String;
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public theme: ThemeProvider) {
    //Subscribe to the result of getActiveTheme; When the result changes, the new value will be passed to this subscriber.
    this.theme.getActiveTheme().subscribe(val => this.selectedTheme = val);
    
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

