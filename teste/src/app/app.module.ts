import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { ImagensService } from '../service/api.service';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SobrePage } from '../pages/sobre/sobre';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';



const firebaseAuth = {
    apiKey: "AIzaSyBoAlYp5gXgyMcDtrMNcsMvYWh07johT8I",
    authDomain: "avec-d0bdb.firebaseapp.com",
    databaseURL: "https://avec-d0bdb.firebaseio.com",
    projectId: "avec-d0bdb",
    storageBucket: "avec-d0bdb.appspot.com",
    messagingSenderId: "629825119322"
  };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SobrePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(firebaseAuth),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SobrePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ImagensService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
