import { EditExercicioPage } from './../edit-exercicio/edit-exercicio';
import { Exercicio } from './../../models/Exercicio';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';


@IonicPage()
@Component({
  selector: 'page-exercicio',
  templateUrl: 'exercicio.html',
})
export class ExercicioPage implements OnInit{
  
  exercicio: Exercicio;
  exercicioPointer: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public db: AngularFireDatabase) {
  }

  ngOnInit(){
    let key = this.navParams.get('exercicioKey');
    this.exercicioPointer = this.db.object('/exercicios/'+key);
    this.exercicioPointer.subscribe((data)=>{
      this.exercicio = new Exercicio(data.nome, data.desc, data.nivel, data.instrumento, data.criador);
    });
  }

  // Verificar depois se o usuário é o criador do exercício
  onEditarExercicio(){
    this.navCtrl.push(EditExercicioPage, {mode: "edit", exercicioPointer: this.exercicioPointer, exercicioData: this.exercicio});
  }

}
