import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class GithubService {
  
  //  private _url: string = "/assets/data/statuses.json";
  private _reposUrl: string = "https://api.github.com/users/jorluiseptor/repos?sort=upated";
  private _profileUrl: string = "https://api.github.com/users/jorluiseptor";

  constructor(private http: HttpClient) { }


  //get github account info
  getProfile(): Observable<object>{
    return this.http.get(this._profileUrl)
  }
  //get my public repositories
  getRepos(): Observable<object>{
    return this.http.get(this._reposUrl);
  };


}
