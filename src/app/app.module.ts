import { EditExercicioPage } from './../pages/edit-exercicio/edit-exercicio';
import { TreinoPage } from './../pages/treino/treino';
import { ExercicioPage } from './../pages/exercicio/exercicio';
import { ProfilePage } from './../pages/profile/profile';
import { ExerciciosPage } from './../pages/exercicios/exercicios';
import { TreinosPage } from './../pages/treinos/treinos';
import { TabsPage } from './../pages/tabs/tabs';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LimitarPipe } from '../pipes/limitar/limitar';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule} from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { LoginPage } from '../pages/login/login';

import { Facebook } from '@ionic-native/facebook';
import { AuthService } from '../services/authService';
import { EditTreinoPage } from '../pages/edit-treino/edit-treino';
import { AdicionarSerieModalPage } from '../pages/adicionar-serie-modal/adicionar-serie-modal';

export const firebaseConfig = {
    apiKey: "AIzaSyBa3a1FD3uoHUs4U-MAzf4aQI-PRSTJ2L8",
    authDomain: "o-sanfoneiro-virtuoso.firebaseapp.com",
    databaseURL: "https://o-sanfoneiro-virtuoso.firebaseio.com",
    projectId: "o-sanfoneiro-virtuoso",
    storageBucket: "",
    messagingSenderId: "208000873572"
  };


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TreinosPage,
    TreinoPage,
    EditTreinoPage,
    ExerciciosPage,
    LoginPage,
    ExercicioPage,
    EditExercicioPage,
    AdicionarSerieModalPage,
    ProfilePage,
    LimitarPipe
  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TreinosPage,
    TreinoPage,
    EditTreinoPage,
    ExerciciosPage,
    LoginPage,
    ExercicioPage,
    EditExercicioPage,
    AdicionarSerieModalPage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Facebook,
    AuthService
  ]
})
export class AppModule {}
