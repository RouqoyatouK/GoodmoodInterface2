import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-splashimage',
  templateUrl: './splashimage.page.html',
  styleUrls: ['./splashimage.page.scss'],
})
export class SplashimagePage  {
  @ViewChild('splashImage', { static: false }) splashImage: any;

  public imageList = ['1.jpg', '121421-login.gif', '2.png'];
  im:any

  constructor(public navCtrl: NavController) {}

  ngAfterViewInit() {
    // Choisissez une image aléatoirement à partir de la liste d'images
    //let randomIndex = Math.floor(Math.random() * this.imageList.length);

    let randomIndex1 = Math.floor(Math.random() * this.imageList.length);
    this.im = this.imageList[randomIndex1];
    console.log(randomIndex1);

  //On a splashImage declarer en haut on va lui donner comme valeur im
    this.splashImage = this.im;
    console.log(this.splashImage)

    // Lancez votre page d'accueil ou autre page ici après un délai de quelques secondes
    setTimeout(() => {
      this.navCtrl.navigateRoot('login');
    }, 6000);
  }




}
