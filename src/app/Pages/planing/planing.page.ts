import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { PlanningService } from 'src/app/Services/planning.service';
import { StorageService } from 'src/app/Services/storage.service';
import { AddPlaningPage } from '../add-planing/add-planing.page';
import { OverlayEventDetail } from '@ionic/core/components';





@Component({
  selector: 'app-planing',
  templateUrl: './planing.page.html',
  styleUrls: ['./planing.page.scss'],
})
export class PlaningPage implements OnInit {
//yyyyyyyyyyyyyyyyyyyy Modal debut
  @ViewChild(IonModal) modal: IonModal;

  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
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
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  //yyyyyyyyyyyyyyy Fin modal


  //Ajouter Planing
  nomplanning: any;
 //idusers: any
  AjouterUnNewPlaning(){
    this.planningService.AjouterPlanning(this.nomplanning,this.user.id).subscribe(data=>{

    })
  }












  constructor(public modalCtlr: ModalController, private planningService: PlanningService, private tokenStorage: StorageService) { }

//Afficher planning d'un user
toutlesplanningdunuser: any;
user: any;

url: string="/tab/todolist";
  ngOnInit() {
     //ICI ON RECUPERER L'UTILISATEUR CONNECTE
     this.user = this.tokenStorage.getUser();
     
    this.planningService.AfficherPlaningDunUser(this.user.id).subscribe(data=>{
      this.toutlesplanningdunuser=data;
      console.log(this.toutlesplanningdunuser)
    })
  }


//popup
  async openModal(){
    const modal = await this.modalCtlr.create({
        component: AddPlaningPage
      });
      await modal.present();

     }

}
