import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Exercicio } from '../../models/Exercicio';

@IonicPage()
@Component({
  selector: 'page-edit-exercicio',
  templateUrl: 'edit-exercicio.html',
})
export class EditExercicioPage {
  
  isEdicao: boolean;
  exercicio: Exercicio;
  opcoesDificuldade: number[];
  instrumentos: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isEdicao = navParams.get('mode') == 'edit';
    this.exercicio = navParams.get('exercicio');
    this.opcoesDificuldade = [1,2,3,4,5];
    console.log(this.exercicio.$key);
  }

  onSalvarExercicio(){

  }

  onAdicionarInstrumentos(){

  }

  onRemoverInstrumento(index: number){
    this.instrumentos.slice(index, 1);
  }
  
  getTitulo(){
    return (this.isEdicao)? 'Edição de' : 'Novo';
  }
}
