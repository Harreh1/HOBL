import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from 'ionic-native';
import { StatsPage } from '../stats/stats';
import { EggSelectPage } from '../egg-select/egg-select';
import { AccessoriesPage } from '../accessories/accessories';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {
	counter = 0;
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.progress = 0;
		this.loadProgress = 0;
		this.levelUp = 500;
		this.level = 1;
		this.counter = 0;
		this.monsterImage1 = "../../assets/imgs/Egg v1.1.gif";
		this.monsterImage2 = "../../assets/imgs/half hatched.gif";
		this.monsterImage3 = "../../assets/imgs/baby.gif";
		this.monsterImage4 = "../../assets/imgs/Monster 1.gif";
		this.startWatching();
		this.updateMonster();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
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
  
  changePage(){
		this.navCtrl.push(StatsPage);
  }
  
  changePage2(){
		this.navCtrl.push(EggSelectPage);
  }
  
  changePageAccessories(){
		this.navCtrl.push(AccessoriesPage);
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
