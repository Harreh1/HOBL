import { Component, transition } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from 'ionic-native';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { StatsPage } from '../stats/stats';

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
	currentMonster: string;
	monsterImage1: string;
	monsterImage2: string;
	monsterImage3: string;
	monsterImage4: string;

	constructor(private navCtrl : NavController, private nativePageTransition: NativePageTransitions){ 
		this.startWatching()
		this.progress = 0;
		this.loadProgress = 0;
		this.levelUp = 500;
		this.level = 1;
		this.counter = 0;
		this.monsterImage1 = "../../assets/imgs/Egg v1.1.gif";
		this.monsterImage2 = "../../assets/imgs/half hatched.gif";
		this.monsterImage3 = "../../assets/imgs/baby.gif";
		this.monsterImage4 = "../../assets/imgs/Monster 1.gif";
		this.updateMonster();


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

  
}
