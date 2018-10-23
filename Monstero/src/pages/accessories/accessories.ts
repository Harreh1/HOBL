import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";
import { MonsterPage } from '../monster/monster';


/**
 * Generated class for the AccessoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accessories',
  templateUrl: 'accessories.html',
})
export class AccessoriesPage {
  santa1: string;
  santa2: string;
  witch1: string;
  witch2: string;
  knit1: string;
  knit2: string;
  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalProvider) {
    if(global.friendNum < 1){
      this.santa1 = "Unlocked after";
      this.santa2 = "1 friend"
    } else {
      this.santa1 = "Tap icon to equip"
    }
    if(global.friendNum < 3){
      this.witch1 = "Unlocked after";
      this.witch2 = "3 friends"
    } else {
      this.witch1 = "Tap icon to equip"
    }
    if(global.friendNum < 5){
      this.knit1 = "Unlocked after";
      this.knit2 = "5 friends"
    } else {
      this.knit1 = "Tap icon to equip"
    }
    if(this.global.energy <2){
      this.global.energy+=1;
    }
    if(this.global.hungriness > 0){
      this.global.hungriness -=1;
    }
  }

  changePage(){
    this.navCtrl.pop();
  }

  setSantaHatValue(){
    if(this.global.friendNum > 0){
      if(this.global.hatValue == "santa"){
        this.setHatToGlobal("");
      }
      else{
        this.setHatToGlobal("santa");
      }
    }
  }

  setWitchHatValue(){
    if(this.global.friendNum > 2){
      if(this.global.hatValue == "witch"){
        this.setHatToGlobal("");
      } 
      else {
        this.setHatToGlobal("witch")
      }
    }
  }

  setKnitHatValue(){
    if(this.global.friendNum > 4){
      if(this.global.hatValue == "knit"){
        this.setHatToGlobal("");
      } else{
        this.setHatToGlobal("knit");
      }
    }
  }

  setHatToGlobal(hat){
    this.global.hatValue = hat; 
    this.global.actionRequired = 1;
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessoriesPage');
  }

}
