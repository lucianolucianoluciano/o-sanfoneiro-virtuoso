import { ExercicioPage } from './../exercicio/exercicio';
import { Exercicio } from './../../models/Exercicio';
import { EditExercicioPage } from './../edit-exercicio/edit-exercicio';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-exercicios',
  templateUrl: 'exercicios.html',
})
export class ExerciciosPage{

  listaExercicios: FirebaseListObservable<Exercicio[]>;
  grupoSelecionado: string;

  constructor(private navCtrl: NavController, db: AngularFireDatabase, loadingCtrl: LoadingController) {
    this.grupoSelecionado = "gerais";
    let carregandoExercicios = loadingCtrl.create({
      content: 'Carregando Exercícios'
    });
    carregandoExercicios.present();
    this.listaExercicios = db.list('/exercicios');
    this.listaExercicios.subscribe((oi)=>{
      carregandoExercicios.dismiss();
    }, ()=>{
      carregandoExercicios.dismiss();
    })
  }

  onCarregarExercicio(exercicio: Exercicio, key: string){
    this.navCtrl.push(ExercicioPage, {exercicioKey: key});
  }

  onNovoExercicio(){
    this.navCtrl.push(EditExercicioPage, {mode: "create"});
  }
}
