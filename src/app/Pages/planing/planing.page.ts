import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { PlanningService } from 'src/app/Services/planning.service';
import { StorageService } from 'src/app/Services/storage.service';
import { AddPlaningPage } from '../add-planing/add-planing.page';

@Component({
  selector: 'app-planing',
  templateUrl: './planing.page.html',
  styleUrls: ['./planing.page.scss'],
})
export class PlaningPage implements OnInit {

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
