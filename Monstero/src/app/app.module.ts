import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StatsPage } from '../pages/stats/stats';
import { EggSelectPage } from '../pages/egg-select/egg-select';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { NativePageTransitions } from '@ionic-native/native-page-transitions';
import { GlobalProvider } from '../providers/global/global';
import { AccessoriesPage } from '../pages/accessories/accessories';
import { MonsterPage } from '../pages/monster/monster';
import { MenuPage } from '../pages/menu/menu';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StatsPage,
    EggSelectPage,
    ProgressBarComponent,
    AccessoriesPage,
    MonsterPage,
    MenuPage
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
    EggSelectPage,
    AccessoriesPage,
    MonsterPage,
    MenuPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NativePageTransitions,
    GlobalProvider
  ]
})
export class AppModule {}
