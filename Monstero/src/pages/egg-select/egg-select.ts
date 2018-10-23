import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { StatsPage } from '../stats/stats';
import { MonsterPage } from '../monster/monster';
import { AccessoriesPage } from '../accessories/accessories'
import { MenuPage } from '../menu/menu'
import { GlobalProvider } from "../../providers/global/global";
import { global } from '@angular/core/src/util';


/**
 * Generated class for the EggSelectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-egg-select',
  templateUrl: 'egg-select.html',
})
export class EggSelectPage {
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EggSelectPage');
  }

	nextPage1(){
    this.global.monsterType = 1;
    this.navCtrl.setRoot(MonsterPage);
  }

  nextPage2(){
    this.global.monsterType = 2;
    this.navCtrl.setRoot(MonsterPage);
  }

  nextPage3(){
    this.global.monsterType = 3;
    this.navCtrl.setRoot(MonsterPage);
  }
}
