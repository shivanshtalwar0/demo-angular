import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
  {
    path:'',
    component:HomePageComponent
  },
  {
    path:'aboutus',
    component:AboutUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
// type 1
export default class AppRoutingModule { }
