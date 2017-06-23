import { EditExercicioPage } from './../edit-exercicio/edit-exercicio';
import { Exercicio } from './../../models/Exercicio';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-exercicio',
  templateUrl: 'exercicio.html',
})
export class ExercicioPage implements OnInit{
  
  exercicio: Exercicio;
  indexNaColecao: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ngOnInit(){
    this.exercicio = this.navParams.get('exercicio');
    this.indexNaColecao = this.navParams.get('index');
  }

  // Verificar depois se o usuário é o criador do exercício
  onEditarExercicio(){
    this.navCtrl.push(EditExercicioPage, {mode: "edit", exercicio: this.exercicio, index: this.indexNaColecao});
  }

}
