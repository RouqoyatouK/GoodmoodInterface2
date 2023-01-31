import { Component, OnInit } from '@angular/core';
import { FavorisService } from 'src/app/Services/favoris.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.page.html',
  styleUrls: ['./favoris.page.scss'],
})
export class FavorisPage implements OnInit {
  //Afficher Favoris
  idusers: any
  toutlesfavoris: any

  constructor(private favorisService: FavorisService, private token: StorageService) { }

  ngOnInit() {
    this.idusers= this.token.getUser();

    this.favorisService.AfficherFavorisUsers(this.idusers.id).subscribe(data=>{
    this.toutlesfavoris= data;
    })

    console.log("hhhhhhhhhhhhh"+ this.toutlesfavoris)

  }

}
