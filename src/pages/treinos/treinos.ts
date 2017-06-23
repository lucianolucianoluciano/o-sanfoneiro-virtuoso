import { EditTreinoPage } from './../edit-treino/edit-treino';
import { Treino } from './../../models/Treino';
import { TreinoPage } from './../treino/treino';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-treinos',
  templateUrl: 'treinos.html',
})
export class TreinosPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onNovoTreino(){
    this.navCtrl.push(EditTreinoPage, {mode: 'create'});
  }

  onCarregarTreino(treino: Treino, index: number){
    this.navCtrl.push(TreinoPage, {treino: treino, index: index});
  }
}
