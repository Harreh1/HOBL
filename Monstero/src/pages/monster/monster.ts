import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from 'ionic-native';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { StatsPage } from '../stats/stats';
import { EggSelectPage } from '../egg-select/egg-select';
import { AccessoriesPage } from '../accessories/accessories';
import { GlobalProvider } from "../../providers/global/global";

/**
 * Generated class for the MonsterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-monster',
  templateUrl: 'monster.html',
})
export class MonsterPage {
    counter: number;
    data: any;
    subscription: any;
    progress: number;
    loadProgress: number;
    levelUp: number;
	level: number;
	hatOn: boolean;
    currentMonster: string;
    monsterImage1: string;
    monsterImage2: string;
    monsterImage3: string;
    monsterImage4: string;
  
    constructor(private navCtrl : NavController, private nativePageTransition: NativePageTransitions, public global:GlobalProvider){ 
      this.progress = 0;
      this.loadProgress = 0;
      this.levelUp = 500;
      this.level = 1;
	  this.counter = 0;
	  this.hatOn = false;
      this.monsterImage1 = "../../assets/imgs/Egg v1.1.gif";
      this.monsterImage2 = "../../assets/imgs/half hatched.gif";
      this.monsterImage3 = "../../assets/imgs/baby.gif";
	  this.monsterImage4 = "../../assets/imgs/Monster 1.gif";
	  this.startWatching();
      this.updateMonster();
    }

	ionViewDidLoad() {
		console.log('ionViewDidLoad MonsterPage');
	}
	changePage(){
			this.navCtrl.push(StatsPage);
	}
	
	changePage2(){
			this.navCtrl.push(EggSelectPage);
	}
	
	changePageAccessories(){
			this.navCtrl.push(AccessoriesPage);
	}
	
	startWatching(){
		var options: DeviceMotionAccelerometerOptions = {
			frequency: 400
		};
		this.subscription = DeviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {	
			if(this.counter == 0){
				this.data = acceleration;
				this.counter = 1;
			}
			if(Math.abs((acceleration.x - parseFloat(this.data.x))) > 0.5){
				this.progress += Math.abs((acceleration.x - parseFloat(this.data.x)));
			}
			if(Math.abs((acceleration.y - parseFloat(this.data.y))) > 0.5){
				this.progress += Math.abs((acceleration.y - parseFloat(this.data.y)));
			}
			if(Math.abs((acceleration.z - parseFloat(this.data.z))) > 0.5){
				this.progress += Math.abs((acceleration.z - parseFloat(this.data.z)));
			}			

			if(this.progress > this.levelUp){
				this.progress = 0;
				this.level +=1;
				this.levelUp *=2;
				this.updateMonster();
			}
			this.loadProgress = Math.round(this.progress/this.levelUp * 100 *100) / 100;
			this.data = acceleration;
			this.getHatValue()
		});
	}
	  
	updateMonster(){
		switch(this.level){
			case 1:
				this.currentMonster = this.monsterImage1;
				break;
			case 2:
				this.currentMonster = this.monsterImage2;
				break;		
			case 3:
				this.currentMonster = this.monsterImage3;
				break;
			case 4:
				this.currentMonster = this.monsterImage4;
				break;
		}
	}

	getHatValue(){
		if(this.global.actionRequired == 1){

			var elem = document.createElement("img");
			while(document.getElementById("hatLocation").firstChild){
				document.getElementById("hatLocation").removeChild(document.getElementById("hatLocation").firstChild)
			}
			if(this.global.hatValue == "santa"){
				elem.src = "../../assets/imgs/santa-claus.png";
				document.getElementById("hatLocation").appendChild(elem);
			} else if (this.global.hatValue == "knit"){
				elem.src = "../../assets/imgs/knit-hat.png";
				document.getElementById("hatLocation").appendChild(elem);
			}else if (this.global.hatValue == "witch"){
				elem.src = "../../assets/imgs/witch-hat.png";
				document.getElementById("hatLocation").appendChild(elem);
			}
			if(this.hatOn == false){
				document.getElementById("monsterPic").style.marginTop = "-25px";
				document.getElementById("monsterPic").style.marginBottom = "-25px";
			}
			this.hatOn = true;
			this.global.actionRequired = 0;
		}
	}

}
