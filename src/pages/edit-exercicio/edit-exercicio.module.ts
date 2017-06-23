import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditExercicioPage } from './edit-exercicio';

@NgModule({
  declarations: [
    EditExercicioPage,
  ],
  imports: [
    IonicPageModule.forChild(EditExercicioPage),
  ],
  exports: [
    EditExercicioPage
  ]
})
export class EditExercicioPageModule {}
