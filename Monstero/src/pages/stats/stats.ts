import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonsterPage } from '../monster/monster';

/**
 * Generated class for the StatsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-stats',
  templateUrl: 'stats.html',
})
export class StatsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  changePage(){
    this.navCtrl.push(MonsterPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
