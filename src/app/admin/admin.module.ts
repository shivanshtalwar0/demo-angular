import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { PostComponent } from './post/post.component';
import { NewComponent } from './post/new/new.component';
import { ViewComponent } from './post/view/view.component';
import { DeleteComponent } from './post/delete/delete.component';
import { EditComponent } from './post/edit/edit.component';



@NgModule({
  declarations: [
  
    PostComponent,
       NewComponent,
       ViewComponent,
       DeleteComponent,
       EditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
