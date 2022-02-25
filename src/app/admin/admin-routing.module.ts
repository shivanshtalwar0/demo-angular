import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginGuard } from './admin-login.guard';
import { DeleteComponent } from './post/delete/delete.component';
import { EditComponent } from './post/edit/edit.component';
import { NewComponent } from './post/new/new.component';
import { PostComponent } from './post/post.component';
import { ViewComponent } from './post/view/view.component';

const routes: Routes = [{
  path:'post',
  component:PostComponent,
  children: [
    {
    canActivate:[AdminLoginGuard],  
    path:'new',
    component: NewComponent
  },
  {
    path:'view',
    component: ViewComponent,
  },
  {
    canActivate:[AdminLoginGuard],
    path:'delete',
    component: DeleteComponent
  },
  {
    canActivate:[AdminLoginGuard],
    path:'edit',
    component: EditComponent
  },

]
  
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
// nested routes
// /post/new => creating a new post
// /post/view/:id -> vieing all posts
// /post/view -> condesed list all posts 
// /post/delete/:id -> deleting a specic post
// /post/edit/:id
// 
// lazyLoading 
// admin => admin UI => AdminModule
// seller => seller UI => SellerModule
// customer => customer UI => CustomerModule
// /admin/