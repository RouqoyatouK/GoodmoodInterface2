import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inscription',
    pathMatch:'full'
  },

{
  path: '',
  loadChildren: () => import('./tab/tab.module').then(m=>m.TabPageModule)
},
  {
    path: 'entrer',
    loadChildren: () => import('./Pages/entrer/entrer.module').then( m => m.EntrerPageModule)
  },
  {
    path: 'add-task/:id',
    loadChildren: () => import('./Pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  },
  {
    path: 'planning',
    loadChildren: () => import('./Pages/planing/planing.module').then( m => m.PlaningPageModule)
  },
  {
    path: 'choixdomaine',
    loadChildren: () => import('./Pages/choixdomaine/choixdomaine.module').then( m => m.ChoixdomainePageModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./Pages/login/login.module').then(m=>m.LoginPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./Pages/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
 
  {
    path: 'sidebar',
    loadChildren: () => import('./PagesAdmin/sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
 
  {
    path: 'citation',
    loadChildren: () => import('./PagesAdmin/citation/citation.module').then( m => m.CitationPageModule)
  },
  // {
  //   path: 'domaine',
  //   loadChildren: () => import('./PagesAdmin/domaine/domaine.module').then( m => m.DomainePageModule)
  // },
  {
    path: 'accueiladmin',
    loadChildren: () => import('./PagesAdmin/accueiladmin/accueiladmin.module').then( m => m.AccueiladminPageModule)
  },
  {
    path: 'domaine',
    loadChildren: () => import('./PagesAdmin/domaine/domaine.module').then( m => m.DomainePageModule)
  },
  {
    path: 'notif',
    loadChildren: () => import('./Pages/notif/notif.module').then( m => m.NotifPageModule)
  },  {
    path: 'profil',
    loadChildren: () => import('./Pages/profil/profil.module').then( m => m.ProfilPageModule)
  },


 




  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: 'add-task',
  //   loadChildren: () => import('./pages/add-task/add-task.module').then( m => m.AddTaskPageModule)
  // },


];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
