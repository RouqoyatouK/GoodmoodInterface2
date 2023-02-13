import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  message: any;

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';


  isLoggedIn = false;
  isLoginFailed = false;
  roles: string[] = [];

  constructor(private authService: AuthService, private storageService: StorageService,
    //pour rediriger vers accueuil

private route: Router) { }

  ngOnInit() {
  }

  onSubmit(): void {
    const { username, email, password } = this.form;

    this.authService.register(username, email, password).subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        
        this.message= data.message;
        console.log(this.message)

        //pour loger directement apres inscription
        if(this.isSuccessful){
          this.authService.login(username, password).subscribe({
            next: data => {
              this.storageService.saveUser(data);
             
              this.isLoginFailed = false;
              this.isLoggedIn = true;
              this.roles = this.storageService.getUser().roles;

           //pour rediriger vers le choix de domaine si le login est 
              this.route.navigateByUrl("/choixdomaine")
            }
          })
      
        }

          
        
          
      },
      error: err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
      }
    });
  }


}
