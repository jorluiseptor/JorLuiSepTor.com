import {Component, OnInit} from '@angular/core';
import {GithubService} from '../shared/github.service';
import {Observable} from 'rxjs/Observable';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'repo-list',
  styleUrls: ['./repo-list.component.css'],
  templateUrl: './repo-list.component.html',
})
export class RepoListComponent implements OnInit {
  user: string;
  repos: Observable<any>;
  userProfile: any = {};

  constructor(public github: GithubService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = params['user'];
      if (this.user) {
        this.repos        = this.github.getReposForUser(this.user);
        
        //call web service and assign the response to the variable
        this.github.getUser(this.user)
                            .subscribe(userProfile =>{
                              this.userProfile = userProfile;
                            });
      }
    });
  }
}
