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
  public userProfile: any = {foo:"bar"};

  constructor(public github: GithubService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.user = params['user'];
      if (this.user) {
        this.repos        = this.github.getReposForUser(this.user);
        this.userProfile  = this.github.getUser(this.user);
      }
    });
  }
}
