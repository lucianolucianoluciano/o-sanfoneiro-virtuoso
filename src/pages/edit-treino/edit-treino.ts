import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ActionSheetController, ModalController, AlertController } from 'ionic-angular';
import { Treino } from '../../models/Treino';
import { NgForm } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';
import { AuthService } from '../../services/authService';
import { AdicionarSerieModalPage } from '../adicionar-serie-modal/adicionar-serie-modal';
import { Serie } from '../../models/Serie';


@IonicPage()
@Component({
  selector: 'page-edit-treino',
  templateUrl: 'edit-treino.html',
})
export class EditTreinoPage {

  isEdicao: boolean;
  treinoPointer: any;
  treinoData: Treino;
  hoje: string;
  userUid: string;

  seriesView: Serie[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public loadingCtrl: LoadingController,
              public db: AngularFireDatabase,
              public authService: AuthService,
              public actionSheetCtrl: ActionSheetController,
              public modalCtrl: ModalController,
              public alertCtrl: AlertController) {
    this.isEdicao = navParams.get('mode') == 'edit';
    this.treinoPointer = navParams.get('treinoPointer');
    this.treinoData = navParams.get('treinoData');
    this.seriesView = (this.treinoData) ? this.treinoData.series || []: [];
    this.hoje = new Date().toISOString();
    this.userUid = this.authService.getUsuario().currentUser.uid;
  }

  getTitulo(){
    return (this.isEdicao)? 'Editar' : 'Novo';
  }

  onSalvarTreino(f: NgForm){
    let carregandoExercicios = this.loadingCtrl.create({
      content: 'Salvando dados'
    });
    let treinoDate = new Treino(this.getDiaFromIso(f.value.dia), this.getTimestampFromIso(f.value.dia), this.seriesView.slice());
    carregandoExercicios.present();
    let fn = (this.isEdicao) ? this.editarTreino : this.novoTreino;
    fn.apply(this, [treinoDate, this.userUid, carregandoExercicios]);
  }

  editarTreino(treinoData: Treino, userId: string, loadingPointer: any){

  }

  novoTreino(treinoData: Treino, userId: string, loadingPointer: any){
    this.db.list('/treinos/'+userId).push(treinoData).then(()=>{
      loadingPointer.dismiss();
      this.alertCtrl.create({
      title: 'Sucesso',
      subTitle:'O treino foi adicionado com sucesso!',
      buttons: ['OK'] }).present();
      this.navCtrl.popToRoot();
    }).catch(()=>{
      loadingPointer.dismiss();
      this.alertCtrl.create({
      title: 'Algo deu errado :/',
      subTitle:'Os dados não foram salvos!' }).present();
      this.navCtrl.popToRoot();
    })
  }

  onAdicionarSerie(){
    let selecionarGrupo = this.criarSelecionarGrupo();
    selecionarGrupo.present();
  }

  adicionarSerie(source: string){
    let modalSerie = this.modalCtrl.create(AdicionarSerieModalPage, {source: source, userId: this.userUid});
    modalSerie.onDidDismiss(serie=>{
      if (serie){
        this.seriesView.push(serie);
      }
    });
    modalSerie.present();
  }

  onRemoverSerie(index: number){
    this.seriesView.splice(index, 1);
  }

  // HELPER METHOS

  private criarSelecionarGrupo(){
    return this.actionSheetCtrl.create({
      title: 'De onde será o exercício?',
      buttons: [
        {
          text: 'Gerais',
          handler: () => {
            this.adicionarSerie('gerais');
          }
        },{
          text: 'Personalizados',
          handler: () => {
            this.adicionarSerie('personalizados');
          }
        },{
          text: 'Voltar',
          role: 'cancel'
        }
      ]
    });
  }

  private getDiaFromIso(iso: string){
    let data = new Date(iso);
    let dia = (data.getDate() > 9) ? data.getDate() : '0' + data.getDate();
    let mes = ((data.getMonth()+1) > 9) ? (data.getMonth()+1) : '0' + (data.getMonth()+1);
    let ano = data.getFullYear();
    return dia + '/' + mes + '/' + ano;
  }

  private getTimestampFromIso(iso: string){
    return new Date(iso).getTime();
  }
}
