import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DomaineService } from 'src/app/Services/domaine.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-domaine',
  templateUrl: './domaine.page.html',
  styleUrls: ['./domaine.page.scss'],
})
export class DomainePage implements OnInit {
  //Pagination
  pages : number = 1;
  // Afficher tout les domaines
  Affichertoutlesdomaines: any;
  nbDomaine: any;

  constructor(private domaineService: DomaineService, private tokenStorage: StorageService) { }

  ngOnInit() {
    //ICI ON RECUPERER L'UTILISATEUR CONNECTE
    this.users = this.tokenStorage.getUser();
    // Afficher tout les domaines

    this.domaineService.AfficherToutlesdomaines().subscribe(data=>{
      this.Affichertoutlesdomaines=data;
      this.nbDomaine= this.Affichertoutlesdomaines.length
      console.log(this.Affichertoutlesdomaines.length)
    })
  }

  //uuuuuuuuuuuuuuuuuuuuuuuuuuuuu Ajouter domaine
  imagedomaine: any;
  nomdomaine: String;
  users: any
  message: any
//recuperer l'image

Recupererlimage(event: any){
  this.imagedomaine=event.target["files"][0];
}

 AjouterDesDomaines(){
//   this.nomRegionSercice.AjouterNomRegion(this.nom, this.superfie, this.coderegion, this.activite, this.pays, this.imageregion).subscribe(data =>{
// //ajout pas necessaire
//   })

this.domaineService.AjouterDomaine(this.nomdomaine, this.users.id, this.imagedomaine).subscribe(data=>{
  this.message= data.data;

})
}





}
