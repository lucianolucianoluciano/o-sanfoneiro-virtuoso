import { TabsPage } from './../pages/tabs/tabs';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';
import { LoginPage } from '../pages/login/login';
import { CadastroPage } from '../pages/cadastro/cadastro';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage:any = TabsPage;
  loginPage = LoginPage;
  cadastroPage = CadastroPage;
  isAutenticado: boolean;
  @ViewChild('nav') nav: NavController;
  
  constructor(platform: Platform,
              statusBar: StatusBar,
              splashScreen: SplashScreen,
              private menuCtrl: MenuController,
              private afAuth: AngularFireAuth) {
    afAuth.authState.subscribe((user: firebase.User) => {
      if (user) {
        this.isAutenticado = true;
        this.rootPage = TabsPage;
      } else {
        this.isAutenticado = false;
        this.rootPage = LoginPage;
      }
    });

    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

  onCarregarPagina(page: any){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }

  onLogout(){
    this.afAuth.auth.signOut();
    this.menuCtrl.close();
    this.nav.setRoot(LoginPage);
  }
}

