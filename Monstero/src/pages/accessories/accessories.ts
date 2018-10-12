import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";


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

  constructor(public navCtrl: NavController, public navParams: NavParams,public global: GlobalProvider) {
  }

  setSantaHatValue(){
    this.setHatToGlobal("santa");
  }

  setWitchHatValue(){
    this.setHatToGlobal("witch")
  }

  setKnitHatValue(){
    this.setHatToGlobal("knit");
  }

  setHatToGlobal(hat){
    this.global.hatValue = hat; 
    this.global.actionRequired = 1;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccessoriesPage');
  }

}
