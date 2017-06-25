import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdicionarSerieModalPage } from './adicionar-serie-modal';

@NgModule({
  declarations: [
    AdicionarSerieModalPage,
  ],
  imports: [
    IonicPageModule.forChild(AdicionarSerieModalPage),
  ],
  exports: [
    AdicionarSerieModalPage
  ]
})
export class AdicionarSerieModalPageModule {}
