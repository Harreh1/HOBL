import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatsPage } from '../pages/stats/stats';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { AccessoriesPage } from '../pages/accessories/accessories';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StatsPage,
    AccessoriesPage,
    ProgressBarComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StatsPage,
    AccessoriesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions
  ]
})
export class AppModule {}
