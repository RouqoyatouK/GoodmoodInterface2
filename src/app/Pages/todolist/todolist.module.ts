import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TodolistPageRoutingModule } from './todolist-routing.module';

import { TodolistPage } from './todolist.page';
import { AddTaskPage } from '../add-task/add-task.page';
import { AddTaskPageModule } from '../add-task/add-task.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TodolistPageRoutingModule,
    AddTaskPageModule
  ],
  declarations: [TodolistPage]
})
export class TodolistPageModule {}
