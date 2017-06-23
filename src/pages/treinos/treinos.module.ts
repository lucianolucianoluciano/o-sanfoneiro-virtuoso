import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreinosPage } from './treinos';

@NgModule({
  declarations: [
    TreinosPage,
  ],
  imports: [
    IonicPageModule.forChild(TreinosPage),
  ],
  exports: [
    TreinosPage
  ]
})
export class TreinosPageModule {}
