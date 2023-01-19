import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CheckboxCustomEvent } from '@ionic/angular';
import { TacheService } from 'src/app/Services/tache.service';
import { AddTaskPage } from '../add-task/add-task.page';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage  {
  today: number = Date.now();

  url: string="/add-task";

  // canDismiss = false;

  // presentingElement = null;



  // async addNewItem() {
  //   const modal = await this.modalCtlr.create({
  //     component: AddTaskPage,
  //   })
  //   modal.onDidDismiss().then(newTask =>{
  //     this.getAllTask()
  //   })
  //   return await modal.present()
  // }

  constructor(public modalCtlr: ModalController , private tacheService: TacheService, private route: ActivatedRoute) {
    // this.getAllTask()
   }

// Afficher toute les tache d'un planing
idplanning: any
toutlestachedunplanning: any;
id:any
tptache= ''
   ngOnInit(){
    const idplanning=this.route.snapshot.params["id"];
    this.id=idplanning
   // this.idplanning=+this.route.snapshot.params["idplanning"];
    console.log("kkkkkkkkkkkkkkkkkkkkk"+idplanning)


    this.tacheService.AfficherTacheDunPlanning(idplanning).subscribe(data=>{
      this.toutlestachedunplanning=data
    console.log(this.toutlestachedunplanning)
     // this.tptache=this.toutlestachedunplanning.nomtypetache

    })
     }
//

   async openModal(){
  const modal = await this.modalCtlr.create({
      component: AddTaskPage,
      componentProps: {
        data: 'id',
      },

    });
    await modal.present();



   }

  // onTermsChanged(event: Event) {
  //   const ev = event as CheckboxCustomEvent;
  //   this.canDismiss = ev.detail.checked;
  // }

  //AfficherToute les taches d'un planning

}
