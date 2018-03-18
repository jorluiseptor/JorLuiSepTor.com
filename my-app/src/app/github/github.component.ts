import { Component, OnInit } from '@angular/core';
import { GithubService, GHProfile } from './github.service';

@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  styleUrls: ['./github.component.scss']
})
export class GithubComponent implements OnInit {

  public ghRepositories; //array of my github repositories
  public ghProfile; //profile object

  constructor(private _githubService: GithubService) { }

  ngOnInit() {
    //get the repos
    this._githubService.getRepos()
        .subscribe(data => this.ghRepositories = data); 

    //get user profile
    this._githubService.getProfile()
        .subscribe(data => this.ghProfile = data);

  }//ngOnInit

}
