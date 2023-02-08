import { Component, OnInit, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { CitationService } from 'src/app/Services/citation.service';
import { StorageService } from 'src/app/Services/storage.service';
import { OverlayEventDetail } from '@ionic/core/components';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  // features: any[] = [
  //   {id: 1, name: 'Top Up', src: 'assets/icons/top-up.png', background: 'rgba(27,150,181, 0.1)', page: ''},
  //   {id: 2, name: 'Withdraw', src: 'assets/icons/cash-withdrawal.png', background: 'rgba(106,100,255, 0.1)', page: ''},

  // ];

  // transactions: any[] = [
  //   {id: 1, vendor: 'Received from PhonePe', image: '', amount: 1500, time: '3:00PM'},
  //   {id: 2, vendor: 'Flaticons', image: '', amount: -1200, time: '4:00PM'}
  // ];


  constructor(private citationService: CitationService, private token: StorageService, private userService: UserService) { }
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

  ngOnInit() {
    this.idusers= this.token.getUser();
    this.citationService.AfficherLesCitationDunUser(this.idusers.id).subscribe(data=>{
      this.toutlescitation= data
      console.log(data)
    })

    //afficher les domaine d'un user
    this.userService.AfficherUsersparid(this.idusers.id).subscribe(data=>{
      this.toutcekiconcerneuser= data;
      this.domaine=this.toutcekiconcerneuser.domaines
      //console.log(this.domaine)
    })
  }

}
