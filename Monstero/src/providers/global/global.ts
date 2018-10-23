import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalProvider {
  public hatValue: string;
  public actionRequired: number;
  public monsterType: number;
  public friendNum: number;
  public friends: any = [];
  public strength: string;
  public hungriness: number;
  public level: number;
  public energy: number;
  constructor() {
    this.friendNum = 0;
    this.level = 0;
    this.hungriness = 0;
    this.energy = 0;
  }

}
