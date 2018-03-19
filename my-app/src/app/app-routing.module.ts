import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//for each component that needs to be in the rout, import it here
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { SocialComponent } from './social/social.component';
import { GithubComponent } from './github/github.component';

//Here you specify the routes and any route parameters if needed.
const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
