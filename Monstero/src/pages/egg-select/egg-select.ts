import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { StatsPage } from '../stats/stats';
import { MonsterPage } from '../monster/monster';
import { AccessoriesPage } from '../accessories/accessories'
import { MenuPage } from '../menu/menu'

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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EggSelectPage');
  }

	nextPage(){
		this.navCtrl.push(StatsPage);
  }

  nextPage2(){
    this.navCtrl.setRoot(MonsterPage);
  }

}
