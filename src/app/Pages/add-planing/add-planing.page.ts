import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { PlanningService } from 'src/app/Services/planning.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-add-planing',
  templateUrl: './add-planing.page.html',
  styleUrls: ['./add-planing.page.scss'],
})
export class AddPlaningPage implements OnInit {
  user:any;

  constructor(private modalController: ModalController, private planningService: PlanningService, private tokenStorage: StorageService) { }
  @ViewChild(IonModal) modal: IonModal;


  ngOnInit() {
    //ICI ON RECUPERER L'UTILISATEUR CONNECTE
    this.user = this.tokenStorage.getUser();
    console.log(this.user.id)
    // MAINTENANT ON PREND LES FERMES D'UN SEUL UTILISATEUR
  
  }

  //Ajouter Planing
  nomplanning: any;
 //idusers: any
  AjouterUnNewPlaning(){
    this.planningService.AjouterPlanning(this.nomplanning,this.user.id).subscribe(data=>{

    })
  }

}
