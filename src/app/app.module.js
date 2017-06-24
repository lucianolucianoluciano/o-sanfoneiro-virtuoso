var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
export var firebaseConfig = {
    apiKey: "AIzaSyBa3a1FD3uoHUs4U-MAzf4aQI-PRSTJ2L8",
    authDomain: "o-sanfoneiro-virtuoso.firebaseapp.com",
    databaseURL: "https://o-sanfoneiro-virtuoso.firebaseio.com",
    projectId: "o-sanfoneiro-virtuoso",
    storageBucket: "",
    messagingSenderId: "208000873572"
};
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
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
            AngularFireModule.initializeApp(firebaseConfig),
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
            { provide: ErrorHandler, useClass: IonicErrorHandler }
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map