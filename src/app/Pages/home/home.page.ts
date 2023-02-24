import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { CitationService } from 'src/app/Services/citation.service';
import { StorageService } from 'src/app/Services/storage.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { UserService } from 'src/app/Services/user.service';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';
import { DomaineService } from 'src/app/Services/domaine.service';
import { ChoixdomaineService } from 'src/app/Services/choixdomaine.service';
import Swal from 'sweetalert2';
import { FavorisService } from 'src/app/Services/favoris.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  //Afficher tout les domaines
  Affichertoutlesdomaines: any;

  //Domaine ajouter users
  iddomaine: ''
  listDomaines: number[] = [];
  toutlesfavoris:any=[]

  // features: any[] = [
  //   {id: 1, name: 'Top Up', src: 'assets/icons/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  //   {id: 2, name: 'Withdraw', src: 'assets/icons/cash-withdrawal.png', background: 'rgba(106,100,255, 0.1)', page: ''},

  // ];

  // transactions: any[] = [
  //   {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
  //   {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  // ];


  constructor(private citationService: CitationService, private token: StorageService, private userService: UserService, private auth: AuthService, private router: Router,
    private domaineService: DomaineService,
    private choixdomaineService: ChoixdomaineService, private favoriService: FavorisService) { }
  @ViewChild(IonModal) modal: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  luActive = false;

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
  public slideOpts = {
    // slidesPerView: 1.5,
    // centeredSlides: true,
    // loop: true,
    // spaceBetween: 10,
    // autoplay: true,

    slidesPerView: 1.5,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: true,
    //loop: true,
    coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: true,
  },

  }
  //Recuperer un user par son id pour avoir ces domaines

  toutcekiconcerneuser: any;
  domaine: any;

  //ecuperer les citation d'un users
  idusers: any;
  toutlescitation: any;

  username: any

  ngOnInit() {

    if (this.memoire == 'true') {
      this.favori = true;
    } else {
      this.favori = false;
    }

    this.idusers= this.token.getUser();
    this.username= this.token.getUser().username;

    this.citationService.AfficherLesCitationDunUser(this.idusers.id).subscribe(data=>{
      this.toutlescitation= data
      console.log(data)
})

      //Afficher tout les domaines
      this.domaineService.AfficherToutlesdomaines().subscribe(data=>{
        this.Affichertoutlesdomaines=data;
        //this.iddomaine=this.Affichertoutlesdomaines.iddomaine
      })

    //afficher les domaine d'un user
    this.userService.AfficherUsersparid(this.idusers.id).subscribe(data=>{
      this.toutcekiconcerneuser= data;
      this.domaine=this.toutcekiconcerneuser.domaines
      //console.log(this.domaine)
    })

    this.favoriService.AfficherFavorisUsers(this.idusers.id).subscribe(data=>{
      console.log(data)
      this.toutlesfavoris= data;
      })
  }

  //Ajouter favoris
  idcitation: any;
  favori: boolean = false;
  memoire : string = localStorage.getItem('favori')!;

  bgColor: any;
  AjouterFAvorisPourUsers(idcitation: any){
    this.favoriService.AjouterFavoris(idcitation, this.idusers.id).subscribe(data=>{
      console.log(data.data)

      if(data.data == 'favoris enregistré !') {
        localStorage.setItem('favori','true');
        //this.favori = true;
      } else {
        //this.favori = false;
        localStorage.setItem('favori','false');
      }
      window.location.reload()
    })
  }


  //Ajouter d'autre domaine a celui deja selectionner lors de l'inscription

  trouverIdDomaine(idom:number){
    console.log("hhhhhhhhhhhhhhhhhhhhh"+idom)
    this.listDomaines.push(idom);
  }


  AjouterDomainePourUses(){

    this.listDomaines=[]
    this.Affichertoutlesdomaines.forEach((domaine: { iddomaine: number; }) => {
      console.log("#domaine"+domaine.iddomaine)
      var element=<HTMLIonCheckboxElement>document.querySelector("#domaine"+domaine.iddomaine)

      if(element.checked){
        this.listDomaines.push(domaine.iddomaine)
      }
      if(this.listDomaines.length != 0){
      Swal.fire({
          title:'Thématique ajouter avec succes',
          heightAuto:false


      })


      }else{
        Swal.fire({
          title:'Aucune thématiques ajouter',
          heightAuto:false


      })

      }
      // else(this.listDomaines=[])
      //   this.message

    });
    console.log(this.listDomaines)

    this.listDomaines.forEach(element => {
      this.choixdomaineService.AjouterDomainPourUse(element, this.idusers.id).subscribe(data=>{
        console.log(data)
      })
    });
  }



  isFavori(idCitation:any){
    var isfavorite=false

    this.toutlesfavoris.forEach((favoris: { idcitation: any; }) => {

      if(idCitation==favoris.idcitation){
        isfavorite=true
      }

    });

    return isfavorite;
  }

}
