import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChoixdomaineService } from 'src/app/Services/choixdomaine.service';
import { DomaineService } from 'src/app/Services/domaine.service';
import { StorageService } from 'src/app/Services/storage.service';
import Swal from 'sweetalert2';



@Component({
  selector: 'app-choixdomaine',
  templateUrl: './choixdomaine.page.html',
  styleUrls: ['./choixdomaine.page.scss'],
})
export class ChoixdomainePage implements OnInit {

  pages: number=1
  Affichertoutlesdomaines: any
  message: String= 'kkkkkkkkkkkkkkkkkkkkkkkk';



  //Domaine users
  users: any;
  iddomaine: ''
  listDomaines: number[] = [];
  constructor(private router: Router,
    private domaineService: DomaineService, private choixdomaineService: ChoixdomaineService, private storage: StorageService, private route: Router) { }

  ngOnInit() {
    this.users= this.storage.getUser();
 
    this.domaineService.AfficherToutlesdomaines().subscribe(data=>{
      this.Affichertoutlesdomaines=data;
      this.iddomaine=this.Affichertoutlesdomaines.iddomaine

    })
  }

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
      if(this.listDomaines.length == 0){
      Swal.fire({
          title:'Vous devez choisir au moins une thématique',
          heightAuto:false
          

      })


      }else{
        this.route.navigateByUrl("/tab/home")

      }
      // else(this.listDomaines=[]) 
      //   this.message
      
    });
    console.log(this.listDomaines)

    this.listDomaines.forEach(element => {
      this.choixdomaineService.AjouterDomainPourUse(element, this.users.id).subscribe(data=>{
        console.log(data)
      })
    });
  }
  goToHomePage() {
    this.router.navigate(['/tab/home']);
  }
  
}
