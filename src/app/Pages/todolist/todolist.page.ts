import { Component, OnInit, ViewChild } from '@angular/core';
import { async } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { ModalController, IonModal } from '@ionic/angular';
import { CheckboxCustomEvent } from '@ionic/angular';
import { TacheService } from 'src/app/Services/tache.service';
import { AddTaskPage } from '../add-task/add-task.page';
import { OverlayEventDetail } from '@ionic/core/components';
import { PriorityService } from 'src/app/Services/priority.service';
import { TypetacheService } from 'src/app/Services/typetache.service';
import { StorageService } from 'src/app/Services/storage.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.page.html',
  styleUrls: ['./todolist.page.scss'],
})
export class TodolistPage  {


  username: any;

  //yyyyyyyyyyyyyyyyyyyy Modal debut
  @ViewChild(IonModal) modal: IonModal;

 // message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      //this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  //yyyyyyyyyyyyyyy Fin modal


  //Ajouter une tache Pour un user
designation: any;
date: any;
completed: any;
nomtypetache:any;
nompriority: any;

//idplaning: any;
//idd:any;




//Ajouter tache
messageetache: any
AjouterUnNewTache(){
  this.tacheService.AjouterUneTacheAUnPanning(this.designation, this.date, this.completed, this.id, this.nomtypetache, this.nompriority).subscribe(data=>{
console.log(data)
this.messageetache= data.message

  })
}



//Completer tache
idtache: any;
CompleterTache(idtache:any){

  this.tacheService.TacheComplet(idtache).subscribe(data=>{

    console.log("llll"+ this.idtache)
  })
}



    //Afficher toute les priority
    recupererpriority: any;
    //Afficher toute les type tache d'un user
    recuperertypetache: any;
    idusers: any
    data: any;



  today: number = Date.now();
  url: string="/add-task";


  constructor(public modalCtlr: ModalController , private tacheService: TacheService, private route: ActivatedRoute, private priorityService: PriorityService,
    private typetacheService: TypetacheService, private tokenStorage: StorageService ) {
    // this.getAllTask()
   }

// Afficher toute les tache d'un planing
idplanning: any
toutlestachedunplanning: any;
id:any
tptache= ''
longeur: any;
   ngOnInit(){
    const idplanning=this.route.snapshot.params["id"];
    this.id=idplanning
   // this.idplanning=+this.route.snapshot.params["idplanning"];
    console.log("kkkkkkkkkkkkkkkkkkkkk"+idplanning)


    this.tacheService.AfficherTacheDunPlanning(idplanning).subscribe(data=>{
      this.toutlestachedunplanning=data
      this.longeur= this.toutlestachedunplanning.length
      console.log("verification: " + JSON.stringify(this.toutlestachedunplanning))



    console.log(this.toutlestachedunplanning)
     // this.tptache=this.toutlestachedunplanning.nomtypetache

     //Completer tache d'un planning recuperer idtache
    // this.idtache= this.toutlestachedunplanning.id

    })

    //   const idplanning=this.route.snapshot.params["id"];
  // this.id=idplanning;
  // console.
    //Afficher toute les priority
    this.priorityService.AfficherPriority().subscribe(data=>{
      this.recupererpriority=data;})

      //Afficher toute les type tache d'un user
      //ICI ON RECUPERER L'UTILISATEUR CONNECTE
    this.idusers = this.tokenStorage.getUser();
      this.typetacheService.AfficherTypeTAcheUnUser(this.idusers.id).subscribe(data=>{
        this.recuperertypetache = data;
      })
     }
//Ajouter typetache user
nomtypetachee: any;
messagetypetache: any

Ajoutettypetache(){
  this.idusers = this.tokenStorage.getUser().id;
  console.log(this.idusers)
  this.typetacheService.AjouterTypeTAcheUnUser(this.idusers,this.nomtypetachee).subscribe(data=>{
this.messagetypetache= data.message;
//console.log(this.messagee)

  })
}


public slideOpts = {
  // slidesPerView: 1.5,
  // centeredSlides: true,
  // loop: true,
  // spaceBetween: 10,
  // autoplay: true,

  slidesPerView: 1.5,
  spaceBetween: 2,
  centeredSlides: true,
  autoplay: true,
  //loop: true,
  coverflowEffect: {
  rotate: 0,
  stretch: 0,
  depth: 100,
  modifier: 1,
  slideShadows: true,
},

}

 //Supprimer planning
 idplanningg: any
 idtachee: any

 openModal( idplaning : number, idtache: number) {
   Swal.fire({
     //title: username,
     text: "Commfirmer la suppression ?",
     heightAuto:false,
     icon: 'warning',
     showCancelButton: true,
     confirmButtonColor: '#3085d6',
     cancelButtonColor: '#d33',
     cancelButtonText : "NON",
     confirmButtonText: 'OUI'
   }).then((result) => {
     if (result.isConfirmed) {
       //suppp
       this.tacheService.Supprimertache(idplaning, idtache).subscribe(() => {});

       Swal.fire({
         title: 'Supprimer  avec succès',
         icon: 'success',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         confirmButtonText: 'OK'
       });
       window.location.reload()


     }
   });
 }
// Une autre manier d'utiliser modal ionicmais cette fois on appelle le popup dans une autre pas
  //  async openModal(){
  // const modal = await this.modalCtlr.create({
  //     component: AddTaskPage,
  //     componentProps: {
  //       data: 'id',
  //     },

  //   });
  //   await modal.present();



  //  }



}
