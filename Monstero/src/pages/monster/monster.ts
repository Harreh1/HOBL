import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from 'ionic-native';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { StatsPage } from '../stats/stats';
import { EggSelectPage } from '../egg-select/egg-select';
import { AccessoriesPage } from '../accessories/accessories';
import { GlobalProvider } from "../../providers/global/global";
import { FriendsPage } from "../friends/friends";
import { GamePage } from "../game/game";

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
	actions: any;
    constructor(private navCtrl : NavController, private nativePageTransition: NativePageTransitions, public global:GlobalProvider){ 
      this.progress = 0;
      this.loadProgress = 0;
      this.levelUp = 350;
      this.level = 1;
	  this.counter = 0;
	  this.hatOn = false;
	  if(this.global.monsterType == 1){
		this.monsterImage1 = "../../assets/imgs/green_egg.gif";
		this.monsterImage2 = "../../assets/imgs/green_half_hatched.gif";
		this.monsterImage3 = "../../assets/imgs/green_baby.gif";
		this.monsterImage4 = "../../assets/imgs/green_monster.gif";
	  }
	  else if(this.global.monsterType == 2){
		this.monsterImage1 = "../../assets/imgs/blue_egg.gif";
		this.monsterImage2 = "../../assets/imgs/blue_half_hatched.gif";
		this.monsterImage3 = "../../assets/imgs/blue_baby.gif";
		this.monsterImage4 = "../../assets/imgs/blue_monster.gif";
	  }
	  else{
		this.monsterImage1 = "../../assets/imgs/purple_egg.gif";
		this.monsterImage2 = "../../assets/imgs/purple_half_hatched.gif";
		this.monsterImage3 = "../../assets/imgs/purple_baby.gif";
		this.monsterImage4 = "../../assets/imgs/purple_monster.gif";
	  }
	
	  this.startWatching();
      this.updateMonster();
    }

	ionViewDidLoad() {
		this.onSelectChange("z");
		console.log('ionViewDidLoad MonsterPage');
	}

	onSelectChange(selectedValue: any){
		if (selectedValue == "s"){
			this.changePage();
		} else if (selectedValue == "a"){
			this.changePageAccessories();
		} else if (selectedValue == "g"){
			if(this.level > 1){
				this.global.hungriness+=1;
				if(this.global.energy > 0){
					this.global.energy -=1;
				}
				this.changePageGame();
			} else {
				alert("Level up your monster to play the game!")
			}

		} else if (selectedValue == "f"){
			this.changePage3();
		} else {
			selectedValue = null;
		}
	}

	changePage(){
			this.navCtrl.push(StatsPage);
	}
	
	changePage2(){
			this.navCtrl.push(EggSelectPage);
	}
	
	changePage3(){
		this.navCtrl.push(FriendsPage);
	}

	changePageGame(){
		this.navCtrl.push(GamePage);
	}
	
	changePageAccessories(){
			this.navCtrl.push(AccessoriesPage);
	}
	
	startWatching(){
		var options: DeviceMotionAccelerometerOptions = {
			frequency: 400
		};
		this.subscription = DeviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {	
			this.updateHat();
			if(this.counter == 0){
				this.data = acceleration;
				this.counter = 1;
			}
			if(Math.abs((acceleration.x - parseFloat(this.data.x))) > 1){
				this.progress += Math.abs((acceleration.x - parseFloat(this.data.x)));
			}
			if(Math.abs((acceleration.y - parseFloat(this.data.y))) > 1){
				this.progress += Math.abs((acceleration.y - parseFloat(this.data.y)));
			}
			if(Math.abs((acceleration.z - parseFloat(this.data.z))) > 1){
				this.progress += Math.abs((acceleration.z - parseFloat(this.data.z)));
			}			

			if(this.progress > this.levelUp){
				this.progress = 0;
				this.level +=1;
				this.levelUp *=1.5;
				this.global.level +=1;
				this.updateHat();
				this.updateMonster();
			}
			this.loadProgress = Math.round(this.progress/this.levelUp * 100 *100) / 100;
			this.data = acceleration;
			this.getHatValue()
			this.actions = null;
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
				this.updateHat();
				elem.src = "../../assets/imgs/santa-claus.png";
				document.getElementById("hatLocation").appendChild(elem);
			} else if (this.global.hatValue == "knit"){
				this.updateHat();
				elem.src = "../../assets/imgs/knit-hat.png";
				document.getElementById("hatLocation").appendChild(elem);
			}else if (this.global.hatValue == "witch"){
				this.updateHat();
				elem.src = "../../assets/imgs/witch-hat.png";
				document.getElementById("hatLocation").appendChild(elem);
			}
			else {
				elem.src = "";
				document.getElementById("hatLocation").appendChild(elem);
			}
			if(this.hatOn == false){
				// document.getElementById("monsterPic").style.marginTop = "-25px";
				// document.getElementById("monsterPic").style.marginBottom = "-25px";
			}
			this.hatOn = true;
			this.global.actionRequired = 0;
		}
	}

	updateHat(){
		if(this.hatOn){
			if(this.level == 2){
				document.getElementById("hatLocation").style.marginTop = "5px";
				document.getElementById("hatLocation").style.marginLeft = "119px";
			}
			else if(this.level == 3){
				document.getElementById("hatLocation").style.marginTop = "0px";
				document.getElementById("hatLocation").style.marginLeft = "122px";
			}
			else if(this.level == 4){
				document.getElementById("hatLocation").style.marginTop = "0px";
				document.getElementById("hatLocation").style.marginLeft = "117px";
			}
		}
	}

}
