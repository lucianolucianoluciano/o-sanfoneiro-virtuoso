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

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    TreinosPage,
    TreinoPage,
    ExerciciosPage,
    ExercicioPage,
    EditExercicioPage,
    ProfilePage,
    LimitarPipe
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    TreinosPage,
    TreinoPage,
    ExerciciosPage,
    ExercicioPage,
    EditExercicioPage,
    ProfilePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
