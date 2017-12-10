import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//for each component that needs to be in the rout, import it here
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

//Here you specify the routes and any route parameters if needed.
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
