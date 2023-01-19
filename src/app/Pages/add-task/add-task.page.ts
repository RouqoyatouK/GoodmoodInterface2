import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonModal, LoadingController, ModalController } from '@ionic/angular';
import { PriorityService } from 'src/app/Services/priority.service';
import { StorageService } from 'src/app/Services/storage.service';
import { TacheService } from 'src/app/Services/tache.service';
import { TypetacheService } from 'src/app/Services/typetache.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.page.html',
  styleUrls: ['./add-task.page.scss'],
})
export class AddTaskPage implements OnInit {
  newTaskObj = {}

  //@ViewChild(IonModal) modal: IonModal;
  //@ViewChild(IonModal) modal: IonModal;


  constructor(private modalController: ModalController, private priorityService: PriorityService, private typetacheService: TypetacheService, private tokenStorage: StorageService , private tacheService: TacheService, private route: ActivatedRoute) { }
  @ViewChild(IonModal) modal: IonModal;

    //Afficher toute les priority
    recupererpriority: any;
    //Afficher toute les type tache d'un user
    recuperertypetache: any;
    idusers: any
    data: any;


  ngOnInit() {
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


  //Pour le slide
  public option = {
    // slidesPerView: 1.5,
    // centeredSlides: true,
    // loop: true,
    // spaceBetween: 10,
    // autoplay: true,
    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },

  }

  // categories =[]
  // categorySelectedCategory: any;
  // index: any;


  // selectCategory(index: any){
  //   this.categorySelectedCategory = this.categories[index]
  //   console.log(this.categorySelectedCategory);
  // }

//Ajouter une tache Pour un user

designation: any;
date: any;
completed: any;
nomtypetache:any;
nompriority: any;
idplanning: any;
id:any;




AjouterUnNewTache(){



  this.tacheService.AjouterUneTacheAUnPanning(this.designation, this.date, this.completed, this.nomtypetache, this.nompriority, this.id).subscribe(data=>{

  })
}


// async dismis(){
//   await this.modalController.dismiss(this.newTaskObj)
// }



}
