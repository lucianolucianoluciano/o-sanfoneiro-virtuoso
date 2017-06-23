import { ExercicioPage } from './../exercicio/exercicio';
import { Exercicio } from './../../models/Exercicio';
import mockExercicios from './../../models/mockExercicios';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-exercicios',
  templateUrl: 'exercicios.html',
})
export class ExerciciosPage implements OnInit{

  listaExercicios: Exercicio[];

  constructor(private navCtrl: NavController) {
  }

  ngOnInit(){
    this.listaExercicios = mockExercicios;
  }

  onCarregarExercicio(exercicio: Exercicio, index: number){
    this.navCtrl.push(ExercicioPage, {exercicio: exercicio, index: index});
  }

  onNovoExercicio(){
    
  }
}
