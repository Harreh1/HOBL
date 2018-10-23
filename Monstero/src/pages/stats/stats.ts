import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MonsterPage } from '../monster/monster';
import { GlobalProvider } from '../../providers/global/global';

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
  energy: string;
  hunger: string;
  power: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global:GlobalProvider) {
    this.power = (this.global.level * 100).toString();
    if(this.global.hungriness == 0){
      this.hunger = "Very Hungry";
    }
    else if(this.global.hungriness == 1){
      this.hunger = "Satisfied";
    }
    else if(this.global.hungriness == 2){
      this.hunger = "Full";
    }
    if(this.global.energy == 0){
      this.energy = "Tired";
    }
    else if(this.global.energy == 1){
      this.energy = "Slightly Active";
    }
    else if(this.global.energy == 2){
      this.energy = "Active";
    }
  }

  changePage(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StatsPage');
  }

}
