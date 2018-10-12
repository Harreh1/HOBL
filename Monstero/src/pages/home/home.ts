import { Component, transition } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DeviceMotion, DeviceMotionAccelerationData, DeviceMotionAccelerometerOptions } from 'ionic-native';
import { NativePageTransitions,NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { EggSelectPage } from '../egg-select/egg-select';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {


	constructor(private navCtrl : NavController, private nativePageTransition: NativePageTransitions){ 

	}

  	ionViewDidLoad() {
    	console.log('ionViewDidLoad HomePage');
  	}

  	changePageStart(){
		this.navCtrl.push(EggSelectPage);
	}


  
}