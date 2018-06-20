import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ImagensService } from '../../service/api.service';
import * as Config from '../../theme/config';

import { AngularFireAuth } from 'angularfire2/auth';
import firebase from 'firebase';

import { ViewChild } from '@angular/core';
import { Slides } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  posts: Array<any> = new Array<any>();

  constructor(public navCtrl: NavController,
              public imagensService: ImagensService,
              public fire: AngularFireAuth ) {}

    slider = [
      {
        title:'',
        description:'',
        image: "'https://static.salaovip.com.br/saloes/vip/galeria/originais/' + post.foto"
      },
      {
        title:'',
        description:'',
        image: "'https://static.salaovip.com.br/saloes/vip/galeria/originais/' + post.foto"
      },
      {
        title:'',
        description:'',
        image: "'https://static.salaovip.com.br/saloes/vip/galeria/originais/' + post.foto"
      },
      {
        title:'',
        description:'',
        image: "'https://static.salaovip.com.br/saloes/vip/galeria/originais/' + post.foto"
      }

      ];

  ionViewWillEnter(){
    this.imagensService.getArray(Array)
    .subscribe(data => {
    this.posts = data.data.gallery;

    });
  }

  loginWithFacebook(){

    this.fire.auth.signInWithPopup( new firebase.auth.FacebookAuthProvider())
      .then( res =>{
        console.log(res);
      });
  }
}