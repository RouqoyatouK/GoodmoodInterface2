import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarPage } from './sidebar.page';

const routes: Routes = [

  {
    path: 'sidebar',
    component: SidebarPage,
    children: [

                    //path home
                          {
                            path:'accueiladmin',
                            children: [
                              {
                                path: '',
                                loadChildren: ()=>import('../../PagesAdmin/accueiladmin/accueiladmin.module').then(m=>m.AccueiladminPageModule)
                              }
                            ]
                          },

                    //path domaine

                    {
                      path:'domaine',
                      children: [
                        {
                          path: '',
                          loadChildren: ()=>import('../../PagesAdmin/domaine/domaine.module').then(m=>m.DomainePageModule)
                        }
                      ]
                    },

                     //path citation

                     {
                      path:'citation',
                      children: [
                        {
                          path: '',
                          loadChildren: ()=>import('../../PagesAdmin/citation/citation.module').then(m=>m.CitationPageModule)
                        }
                      ]
                    },



                    //Path redirect

                    {
                      path: '',
                      redirectTo: 'sidebar/accueiladmin',
                      pathMatch:'full'
                    }


    ]
  },

  {
    path: '',
    redirectTo: 'sidebar/accueilAdmin',
    pathMatch:'full'
  }







//   {
//     path:"",
//     component:SidebarPage,
//     children:[
//       {
//         path: '',
//         redirectTo: 'accueilAdmin',
//         pathMatch: 'full'
//       },
//     {
//        path: 'accueilAdmin',
//       loadChildren: () => import('../../PagesAdmin/accueil-admin/accueil-admin.module').then( m => m.AccueilAdminPageModule)
//     },

//     {
//       path: 'creercitation',
//       loadChildren: () => import('../../PagesAdmin/creercitation/creercitation.module').then( m => m.CreercitationPageModule)
//     },

//     {
//       path: '',
//       redirectTo: 'accueilAdmin',
//       pathMatch: 'full'
//     },
//   ]
// }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SidebarPageRoutingModule {}
