import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { PlanningService } from 'src/app/Services/planning.service';
import { StorageService } from 'src/app/Services/storage.service';
import { OverlayEventDetail } from '@ionic/core/components';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/Services/user.service';





@Component({
  selector: 'app-planing',
  templateUrl: './planing.page.html',
  styleUrls: ['./planing.page.scss'],
})
export class PlaningPage implements OnInit {

  username: any;
  toutcekiconcerneuser: any
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
  datedebut: any;
  datefin: any;
 //idusers: any
 messagee: any;
  AjouterUnNewPlaning(){
    this.planningService.AjouterPlanning(this.nomplanning, this.datedebut, this.datefin,  this.user.id).subscribe(data=>{
console.log(data)
this.messagee = data.message;
window.location.reload()

    })
    
  }












  constructor(public modalCtlr: ModalController, private userService: UserService, private planningService: PlanningService, private tokenStorage: StorageService) { }

//Afficher planning d'un user
toutlesplanningdunuser: any;
user: any;
longueur: any

url: string="/tab/todolist";
  ngOnInit() {
     //ICI ON RECUPERER L'UTILISATEUR CONNECTE
     this.user = this.tokenStorage.getUser();
    this.planningService.AfficherPlaningDunUser(this.user.id).subscribe(data=>{
      this.toutlesplanningdunuser=data;
      console.log(this.toutlesplanningdunuser)

      this.longueur= this.toutlesplanningdunuser.length
    


 
    })

      this.userService.AfficherUsersparid(this.user.id).subscribe(data=>{
        this.toutcekiconcerneuser= data;
        this.username=this.toutcekiconcerneuser.username
        console.log(this.username)
      })
  
  }

  //Supprimer planning
  idplanning: any
  openModal( idplaning : number) {
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
        this.planningService.Supprimerplanning(idplaning).subscribe(() => {});
        console.log(idplaning)
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

// //popup
//   async openModal(){
//     const modal = await this.modalCtlr.create({
//         component: AddPlaningPage
//       });
//       await modal.present();

//      }

}
