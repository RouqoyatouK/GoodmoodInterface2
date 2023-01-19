import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
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
    path: 'add-planing',
    loadChildren: () => import('./Pages/add-planing/add-planing.module').then( m => m.AddPlaningPageModule)
  },
  {
    path: 'sidebar',
    loadChildren: () => import('./PagesAdmin/sidebar/sidebar.module').then( m => m.SidebarPageModule)
  },
  {
    path: 'accueil-admin',
    loadChildren: () => import('./PagesAdmin/accueil-admin/accueil-admin.module').then( m => m.AccueilAdminPageModule)
  }

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
