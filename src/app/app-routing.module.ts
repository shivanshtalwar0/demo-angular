import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'admin',
    loadChildren:()=>import('./admin/admin.module').then((m)=>m.AdminModule)
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  },
  {
    path:'posts/:postId',
    component:PostsComponent
  },
  {
    path:"**",
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// type 1
export default class AppRoutingModule { }
