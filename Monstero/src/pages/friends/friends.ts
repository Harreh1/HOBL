import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController  } from 'ionic-angular';
import { GlobalProvider } from "../../providers/global/global";

/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  notes: any = [];
  num: number;
  counter: number;
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public global:GlobalProvider) {
    if(this.global.energy <2){
        this.global.energy+=1;
      }
  }

  addNote(){

      let prompt = this.alertCtrl.create({
          title: 'Add a new friend',
          inputs: [{
              name: 'title'
          }],
          buttons: [
              {
                  text: 'Cancel'
              },
              {
                  text: 'Add',
                  handler: data => {
                      this.global.friends.push(data);
                      this.global.friendNum +=1;
                      this.num+=1;
                  }
              }
          ]
      });

      prompt.present();
  }

  editNote(note){

      let prompt = this.alertCtrl.create({
          title: 'Edit Note',
          inputs: [{
              name: 'title'
          }],
          buttons: [
              {
                  text: 'Cancel'
              },
              {
                  text: 'Save',
                  handler: data => {
                      let index = this.notes.indexOf(note);

                      if(index > -1){
                        this.notes[index] = data;
                      }
                  }
              }
          ]
      });

      prompt.present();      

  }

  deleteNote(note){

      let index = this.notes.indexOf(note);

      if(index > -1){
        this.global.friendNum -=1;
        this.global.friends.splice(index,1);
      }
  }

  changePage(){
    this.navCtrl.pop();
  }

  test(){
    var a = Math.floor((Math.random() * 3) + 1);
     if(a == 0){
      return "../../assets/imgs/santa-claus.png";
    } else if (a == 1){
      return "../../assets/imgs/witch-hat.png";
    }
    else if (a == 2){
        return "../../assets/imgs/santa-claus.png";
      }
    else if (a == 3){
        return "../../assets/imgs/witch-hat.png";
      }
    
  }

  addFriend() {
    var txt;
    var person = prompt("Add your friends username");
    if (person == null || person == "") {
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
  }

  ionViewDidLoad() {
    this.notes = this.global.friends;
    console.log('ionViewDidLoad FriendsPage');
  }

}
