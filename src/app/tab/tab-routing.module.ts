import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaningPageModule } from '../Pages/planing/planing.module';

import { TabPage } from './tab.page';

const routes: Routes = [
  {
    path: 'tab',
    component: TabPage,
    children: [

                    //path home
                          {
                            path:'home',
                            children: [
                              {
                                path: '',
                                loadChildren: ()=>import('../Pages/home/home.module').then(m=>m.HomePageModule)
                              }
                            ]
                          },

                    //path search

                    {
                      path:'notif',
                      children: [
                        {
                          path: '',
                          loadChildren: ()=>import('../Pages/notif/notif.module').then(m=>m.NotifPageModule)
                        }
                      ]
                    },


                    //Favoris

                    {
                      path:'favoris',
                      children: [
                        {
                          path: '',
                          loadChildren: ()=>import('../Pages/favoris/favoris.module').then(m=>m.FavorisPageModule)
                        }
                      ]
                    },

                    //Write

                    {
                      path:'write',
                      children: [
                        {
                          path: '',
                          loadChildren: ()=>import('../Pages/write/write.module').then(m=>m.WritePageModule)
                        }
                      ]
                    },

                    //todolist


                    {
                      path:'todolist/:id',
                      children: [
                        {
                          path: '',
                          loadChildren: ()=>import('../Pages/todolist/todolist.module').then(m=>m.TodolistPageModule)
                        }
                      ]
                    },
                    {
                      path:'planning',
                      children: [
                        {
                          path: '',
                          loadChildren: ()=>import('../Pages/planing/planing-routing.module').then(m=>PlaningPageModule)
                        }
                      ]
                    },




                    //Path redirect

                    {
                      path: '',
                      redirectTo: 'tab/home',
                      pathMatch:'full'
                    }


    ]
  },

  {
    path: '',
    redirectTo: '/tab/home',
    pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabPageRoutingModule {}
