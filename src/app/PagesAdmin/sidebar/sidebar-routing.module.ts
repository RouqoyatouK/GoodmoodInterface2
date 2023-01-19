import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarPage } from './sidebar.page';

const routes: Routes = [
//   {
//     path: '',
//     component: SidebarPage
//   },

//   {
//     path: '',
//     redirectTo: 'signin',
//     pathMatch: 'full'
//   },
//   {
//     path: 'sidebar',
//     loadChildren: () => import('../../PagesAdmin/sidebar/sidebar.module').then( m => m.SidebarPageModule)
//   },

//   {
//     path: 'accueilAdmin',
//     loadChildren: () => import('../../PagesAdmin/accueil-admin/accueil-admin.module').then( m => m.AccueilAdminPageModule)
//   },




// ];



{
  path: '',
  component: SidebarPage,
  children:[
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    },
   
    {
       path: 'accueilAdmin',
      loadChildren: () => import('../../PagesAdmin/accueil-admin/accueil-admin.module').then( m => m.AccueilAdminPageModule)
    },

    {
      path: '**',
      redirectTo: '',
      pathMatch: 'full'
    },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarPageRoutingModule {}
