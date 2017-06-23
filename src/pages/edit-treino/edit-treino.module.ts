import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTreinoPage } from './edit-treino';

@NgModule({
  declarations: [
    EditTreinoPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTreinoPage),
  ],
  exports: [
    EditTreinoPage
  ]
})
export class EditTreinoPageModule {}
