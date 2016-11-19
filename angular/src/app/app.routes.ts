import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {RepoListComponent} from './github/repo-list/repo-list.component';
import {RepoDetailComponent} from './github/repo-detail/repo-detail.component';

//remember to add videos page connected to youtube

export const rootRouterConfig: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'code', 
  // component: RepoListComponent,
    children: [
      {path: '', component: RepoListComponent},
      {path: ':user', component: RepoListComponent,
        children: [
          {path: '', component: RepoDetailComponent},
          {path: ':repo', component: RepoDetailComponent}
        ]
      }]
  }
];
