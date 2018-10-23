import { Component, Testability } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { updateDate } from 'ionic-angular/umd/util/datetime-util';
import * as $ from "jquery";
import { GlobalProvider } from '../../providers/global/global';
import { MonsterPage } from '../monster/monster';


/**
 * Generated class for the GamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})

export class GamePage {
  private score: number;
  private color : string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public global: GlobalProvider) {
  }

  ionViewDidLoad() {
    while(1){
      alert("Tap the fruit to collect food for your monster!");
      break;
    }
    var a = 0;
    $(document).on('click', '.box', function(){
      $(this).hide();
      if($(this).data("test")){
        a += 1;
      }else{
        if(a!= 0){
          a -= 1;
        }
      }
      $(".score").html("" + a);
    });
    this.score = a;
    this.color = "blue";
    for (var i = 0; i < 10; i++) { 
      this.dropBox();
    }  
    var timer = 0;
    var timer2 =0;
    var drop = setInterval(() =>{
      for (var i = 0; i < 10; i++) { 
        this.dropBox();
      }  
      timer2+=1;
      if(timer2>4){
        clearInterval(drop);
      }
    }, 5000);
    var count = setInterval(() =>{
      this.countdown;
      timer+=1;
      if(timer > 30){
        clearInterval(count);
      }
    }, 1000);
    this.countdown();
    console.log('ionViewDidLoad GamePage');
  }
  changePage(){
    this.navCtrl.pop();
  }
  random(min,max){
    return Math.round(Math.random() * (max-min) + min);
  }

  setBG(){
    if (Math.round(Math.random())){
      return "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Frankenstein-icon.png";
    } else {
      return "http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Scream-icon.png";
    }
  }

 

  dropBox(){
    var length = this.random(0, ($(".game").width()));
    var velocity = this.random(850, 8000);
    var size = this.random(50, 100);
    var thisBox = $("<div/>", {
      class: "box",
      style:  "width:" +size+ "px; height:"+size+"px; left:" + length+  "px; transition: transform " +velocity+ "ms linear;"
    });

    // thisBox.className = "box";
    // thisBox.style.width = size+ "px"; 
    // thisBox.style.height = size +"px"; 
    // thisBox.style.left = length+  "px";
    // thisBox.style.transition = "transform " +velocity+ "ms linear";

    $(thisBox).data("test", Math.round(Math.random()));
    if($(thisBox).data("test")){
      var rand = this.random(0,2);
      if(rand == 0){
        $(thisBox).css({"background": "url('../../assets/imgs/apple.png')", "background-size":"contain"});
      }
      else if (rand == 1){
        $(thisBox).css({"background": "url('../../assets/imgs/watermelon.png')", "background-size":"contain"});
      }
      else{
        $(thisBox).css({"background": "url('../../assets/imgs/banana.png')", "background-size":"contain"});
      }
    }  else {
      var rand = this.random(0,1);
      if(rand){
        $(thisBox).css({"background": "url('../../assets/imgs/burger.png')", "background-size":"contain"});
      } else {
        $(thisBox).css({"background": "url('../../assets/imgs/pizza.png')", "background-size":"contain"});

      }
    }

    // //set data and bg based on data
    // var img = this.random(0,1);
    // thisBox. = "test";
    // if(img == 0){
    //   thisBox.style.background = "url('http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Frankenstein-icon.png')";
    //   thisBox.style.backgroundSize =  "contain";
    // } else {
    //   thisBox.style.background = "url('http://icons.iconarchive.com/icons/hopstarter/halloween-avatars/128/Scream-icon.png')";
    //   thisBox.style.backgroundSize =  "contain";
    // }
    
    //insert gift element
    $(".game").append(thisBox);
    
    //random start for animation
    setTimeout(function(){
      thisBox.addClass("move");
    }, this.random(0, 5000) );
    
    //remove this object when animation is over
    $(thisBox).one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend",
                function(event) {
      (this).remove();
    });

   
  }

  addScore(){
    this.score +=1;
  }
  minusScore(){
    this.score -=1;

  }

  countdown() { 
      var seconds = 30;
      function tick() {
          var counter = document.getElementById("counter");
          seconds--;
          counter.innerHTML = (seconds < 10 ? "0" : "")  + String(seconds) + " Seconds";
          if( seconds > 0 ) {
              setTimeout(tick, 1000);
          } else {
            alert("Game Over");
          }
      }
      tick();
     }

}

