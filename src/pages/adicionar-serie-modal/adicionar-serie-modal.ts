import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Exercicio } from '../../models/Exercicio';
import { NgForm } from '@angular/forms';
import { Serie } from '../../models/Serie';

@IonicPage()
@Component({
  selector: 'page-adicionar-serie-modal',
  templateUrl: 'adicionar-serie-modal.html',
})
export class AdicionarSerieModalPage {
  duracaoDefault: string;
  exerciciosDisponiveis: FirebaseListObservable<Exercicio[]>;
  source: string;
  userUid: string;

  constructor(private viewCtrl: ViewController,
              private navParams: NavParams,
              private afDb: AngularFireDatabase) {
    this.duracaoDefault = new Date(2017, 1, 1, 1, 6, 35, 0).toISOString();
    this.source = this.navParams.get('source');
    this.userUid = this.navParams.get('userUid');
  }

  /**
   * Carrega a coleção de exercícios do Firebase
   */
  ionViewWillEnter(){
    if (this.source === 'gerais'){
      this.exerciciosDisponiveis = this.afDb.list('/exercicios');
    }else if (this.source === 'personalizados' || true){
      this.exerciciosDisponiveis = this.afDb.list('/exerciciosDoUsuario/'+this.userUid);
    }
  }

  onAdicionarSerie(f: NgForm){
    let serie = new Serie(this.getTempoFromISO(f.value.duracao),
                          this.getSegundosFromIso(f.value.duracao),
                          this.formataInstrumento(f.value.instrumento),
                          f.value.exercicioSelecionado);
    this.viewCtrl.dismiss(serie);
  }

  getTempoFromISO(iso: string){
    let data = new Date(iso);
    let minutos = (data.getMinutes() > 9) ? data.getMinutes().toString() : '0' + data.getMinutes();
    let segundos = (data.getSeconds() > 9) ? data.getSeconds().toString() : '0' + data.getSeconds();
    return minutos + ':' + segundos;
  }

  getSegundosFromIso(iso: string){
    let data = new Date(iso);
    return data.getMinutes() * 60 + data.getSeconds(); 
  }

  formataInstrumento(instrumento: string){
    return instrumento.trim().split(' ').map((parte) => parte.charAt(0).toUpperCase() + parte.toLowerCase().slice(1)).join(' ');
  }

  onFecharModal(){
    this.viewCtrl.dismiss();
  }
}
