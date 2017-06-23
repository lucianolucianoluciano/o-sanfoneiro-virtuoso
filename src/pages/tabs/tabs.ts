import { ProfilePage } from './../profile/profile';
import { TreinosPage } from './../treinos/treinos';
import { ExerciciosPage } from './../exercicios/exercicios';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  exerciciosPage = ExerciciosPage;
  treinosPage = TreinosPage;
  profilePage = ProfilePage;
  
}
