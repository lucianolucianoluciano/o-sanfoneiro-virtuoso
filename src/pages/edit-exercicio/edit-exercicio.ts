import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController, LoadingController } from 'ionic-angular';
import { Exercicio } from '../../models/Exercicio';
import { NgForm } from "@angular/forms";
import {AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-edit-exercicio',
  templateUrl: 'edit-exercicio.html',
})
export class EditExercicioPage {
  
  isEdicao: boolean;
  exercicio: Exercicio;
  exercicioPointer: any;
  opcoesDificuldade: number[];
  instrumentosView: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public toastCtrl: ToastController, public db: AngularFireDatabase, public loadingCtrl: LoadingController) {
    this.isEdicao = navParams.get('mode') == 'edit';
    this.exercicio = navParams.get('exercicioData') || new Exercicio();
    this.exercicioPointer = navParams.get('exercicioPointer');

    this.opcoesDificuldade = [1,2,3,4,5];
    this.instrumentosView = (this.isEdicao) ? this.exercicio.instrumento || [] : [];
  }

  /**
   * Cria Alert com campo para adicionar um instrumento na lista de instrumentos na view
   */
  onAdicionarInstrumento(){
    this.alertCtrl.create({
      title: 'Adicionar Instrumento',
      inputs: [
        {
          name: 'instrumento',
          placeholder: 'Nome'
        }
      ],
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Adicionar',
          handler: data => {  
            let nomeValido = data.instrumento.trim() !== '' && data.instrumento !== null;

            let jaExiste: boolean;
            this.instrumentosView.forEach(instrumento => {
              if (instrumento.toUpperCase().trim() == data.instrumento.toUpperCase().trim()){
                jaExiste = true;
              }
            });

            if (!nomeValido || jaExiste) {
              this.toastCtrl.create({
                message: 'Insira um instrumento válido e que ainda não tenha sido adicionado',
                duration: 1500,
                position: 'bottom'
              }).present();
              return;
            }
            
            let instrumentoNome = data.instrumento.trim();
            this.instrumentosView.push(instrumentoNome.charAt(0).toUpperCase() + instrumentoNome.slice(1));

          }
        }
      ]
    }).present();
  }

  onRemoverInstrumento(index: number){
    this.instrumentosView.splice(index, 1);
  }

  onSalvarExercicio(f: NgForm){
    let carregandoExercicios = this.loadingCtrl.create({
      content: 'Salvando dados;'
    });
    carregandoExercicios.present();

    let novoExercicio = new Exercicio(f.value.nome, f.value.desc, f.value.nivel, this.instrumentosView.slice(), "Luciano Júnior");
    if (this.isEdicao){
      this.editarExercicio(novoExercicio, carregandoExercicios);
    }else{
      this.criarExercicio(novoExercicio, carregandoExercicios);
    }
  }
  
  editarExercicio(novoExercicio: Exercicio, loadingMsg: any){
    this.exercicioPointer.set(novoExercicio).then(()=>{
        loadingMsg.dismiss();
        this.alertCtrl.create({
          title: 'Sucesso',
          subTitle:'Os dados foram salvos com sucesso!',
          buttons: ['OK']}).present();
        });
        this.navCtrl.popToRoot();
  }

  criarExercicio(novoExercicio: Exercicio, loadingMsg: any){
    this.db.list('/exercicios').push(novoExercicio).then(()=>{
      this.alertCtrl.create({
      title: 'Sucesso',
      subTitle:'O exercício foi adicionado com sucesso!',
      buttons: ['OK'] }).present();
      this.navCtrl.popToRoot();
    }).catch(()=>{
      this.alertCtrl.create({
      title: 'Algo deu errado :/',
      subTitle:'Os dados não foram salvos!' }).present();
      this.navCtrl.popToRoot();
    })
  }
  getTitulo(){
    return (this.isEdicao)? 'Edição de' : 'Novo';
  }
}
