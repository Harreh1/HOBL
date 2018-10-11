import { Component, transition } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from 'ionic-native';
// import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { StatsPage } from '../stats/stats';
import { GlobalProvider } from "../../providers/global/global";
import { AccessoriesPage } from '../accessories/accessories';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
	counter: number;
	data: any;
	subscription: any;
	progress: number;
	loadProgress: number;
	levelUp: number;
	level: number;
	monsterImage: string;
	constructor(private navCtrl : NavController,public global:GlobalProvider/**, private nativePageTransition: NativePageTransitions**/){ 
		// this.startWatching()
		this.progress = 0;
		this.loadProgress = 0;
		this.levelUp = 500;
		this.level = 1;
		this.counter = 0;
		this.monsterImage = "../../assets/imgs/mini_monster_slug.jpg";
	}

	getHatValue(){
		alert(this.global.hatValue);
		var elem = document.createElement("img");
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
	}

	changePage(){
		// var options: NativeTransitionOptions = {
		// 	direction: 'left',
		// 	duration: 400,
		// 	slowdownfactor: -1,
		// 	iosdelay: 50
		// }
		// this.nativePageTransition.slide(options);
		// this.navCtrl.setRoot(StatsPage);
		this.navCtrl.push(StatsPage);
	}
	changePageAccessories(){
		this.navCtrl.push(AccessoriesPage);
	}

// 	startWatching(){
// 		var options: DeviceMotionAccelerometerOptions = {
// 			frequency: 400
// 		};
// 		this.subscription = DeviceMotion.watchAcceleration(options).subscribe((acceleration: DeviceMotionAccelerationData) => {	
// 			if(this.counter == 0){
// 				this.data = acceleration;
// 				this.counter = 1;
// 			}
// 			if(Math.abs((acceleration.x - parseFloat(this.data.x))) > 0.5){
// 				this.progress += Math.abs((acceleration.x - parseFloat(this.data.x)));
// 			}
// 			if(Math.abs((acceleration.y - parseFloat(this.data.y))) > 0.5){
// 				this.progress += Math.abs((acceleration.y - parseFloat(this.data.y)));
// 			}
// 			if(Math.abs((acceleration.z - parseFloat(this.data.z))) > 0.5){
// 				this.progress += Math.abs((acceleration.z - parseFloat(this.data.z)));
// 			}			

// 			if(this.progress > this.levelUp){
// 				this.progress = 0;
// 				this.levelUp +=1;
// 				if(this.monsterImage == "../../assets/imgs/WormMonster_icon.jpg"){
// 					this.monsterImage = "../../assets/imgs/mini_monster_slug.jpg";
// 				} else {
// 					this.monsterImage = "../../assets/imgs/WormMonster_icon.jpg";
// 				}
// 			}
// 			this.loadProgress = Math.round(this.progress/this.levelUp * 100 *100) / 100;
// 			this.data = acceleration;
// 		});

//   }
  
}
