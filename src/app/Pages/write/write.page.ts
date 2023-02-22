import { Component, OnInit } from '@angular/core';
import { MessageService } from 'src/app/Services/message.service';
import { StorageService } from 'src/app/Services/storage.service';
import { TypemessageService } from 'src/app/Services/typemessage.service';

@Component({
  selector: 'app-write',
  templateUrl: './write.page.html',
  styleUrls: ['./write.page.scss'],
})
export class WritePage implements OnInit {

  //Afficher type messsage
  toutlesypesmessages: any;

  //Envoyer write
  idusers: any;
  cotenumessage: any;
  idtypemessage: any;
  message: any

  constructor(private typemessageService: TypemessageService, private token: StorageService, private messageService: MessageService) { }

  ngOnInit() {
    this.typemessageService.AfficherTypeMessage().subscribe(data=>{
      this.toutlesypesmessages= data
      console.log(data);

      //Recuperer users
      this.idusers= this.token.getUser()
      
    })
  }

  // Envoyer message

  EnvoyerUnMessage(){
    this.idusers = this.token.getUser().id;
    this.messageService.AjouterUneTacheAUnPanning(this.idusers, this.idtypemessage, this.cotenumessage).subscribe(data=>{
      this.message= data.message;


    })
  }

}
