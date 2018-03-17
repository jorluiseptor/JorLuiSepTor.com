import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  
  //  private _url: string = "/assets/data/statuses.json";
  private _reposUrl: string = "https://api.github.com/users/jorluiseptor/repos";

  constructor(private http: HttpClient) { }

  //get my public repositories
  getRepos(): Observable<object>{
    return this.http.get(this._reposUrl);
  };
}
