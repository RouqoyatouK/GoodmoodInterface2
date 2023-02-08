import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/app/Services/storage.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-notif',
  templateUrl: './notif.page.html',
  styleUrls: ['./notif.page.scss'],
})
export class NotifPage implements OnInit {

  constructor(private userService: UserService, private token: StorageService) { }

  //Recuperer un user par son id pour avoir les notif
  id: any
  toutcekiconcerneuser: any;
  notification: any;
  
  ngOnInit() {
    this.id= this.token.getUser();

    this.userService.AfficherUsersparid(this.id.id).subscribe(data=>{
      this.toutcekiconcerneuser= data;
      this.notification=this.toutcekiconcerneuser.notifications
      console.log(this.notification)
    })
  }

}
