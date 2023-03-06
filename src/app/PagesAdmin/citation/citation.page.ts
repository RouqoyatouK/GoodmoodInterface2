import { Component, OnInit } from '@angular/core';
import { CitationService } from 'src/app/Services/citation.service';
import { DomaineService } from 'src/app/Services/domaine.service';

@Component({
  selector: 'app-citation',
  templateUrl: './citation.page.html',
  styleUrls: ['./citation.page.scss'],
})
export class CitationPage implements OnInit {
  //Pagination
  pages : number = 1;
  constructor(private citationService: CitationService, private domaineService: DomaineService) { }


   // Afficher tout les domaines
   Affichertoutlesdomaines: any;
  ngOnInit() {
    // Afficher tout les domaines

    this.domaineService.AfficherToutlesdomaines().subscribe(data=>{
      this.Affichertoutlesdomaines=data;
      //this.nbDomaine= this.Affichertoutlesdomaines.length
    })
  }

   //uuuuuuuuuuuuuuuuuuuuuuuuuuuuu Ajouter domaine
   imagecitation: any;
   ecrivain: String;
   contenu: String;
   message: any;
   iddomaine: any
 //recuperer l'image
 
 Recupererlimage(event: any){
   this.imagecitation=event.target["files"][0];
   
 }
 
 AjouterLeCitation(){
 this.citationService.AjouterCitation(this.imagecitation, this.iddomaine, this.ecrivain, this.contenu).subscribe(data=>{
   this.message= data.data;
 
 })
 }
 
}
