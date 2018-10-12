import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EggSelectPage } from './egg-select';

@NgModule({
  declarations: [
    EggSelectPage,
  ],
  imports: [
    IonicPageModule.forChild(EggSelectPage),
  ],
})
export class EggSelectPageModule {}
