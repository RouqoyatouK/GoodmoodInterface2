import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';
import { StorageService } from 'src/app/Services/storage.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.page.html',
  styleUrls: ['./sidebar.page.scss'],
})
export class SidebarPage implements OnInit {

  constructor(private token: StorageService, private userService: UserService, private auth: AuthService, private router: Router) { }

  ngOnInit() {
  }

  //deconnexion
logout(): void {
  this.auth.logout().subscribe({
    next: res => {
      console.log(res);
      this.token.clean();
      this.router.navigateByUrl("/login")
      //window.location.reload();
    },
    error: err => {
      console.log(err);
    }
  });
}

}
