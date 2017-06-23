import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TreinoPage } from './treino';

@NgModule({
  declarations: [
    TreinoPage,
  ],
  imports: [
    IonicPageModule.forChild(TreinoPage),
  ],
  exports: [
    TreinoPage
  ]
})
export class TreinoPageModule {}
