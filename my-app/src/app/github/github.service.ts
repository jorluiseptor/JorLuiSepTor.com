import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

export interface IProfile {
  login: string,
  html_url: string,
  public_repos: number,
  public_gists: number,
  followers: number,
  following: number 
}

export interface IRepositories{
  html_url: string,
  name: string,
  description: string
}

@Injectable()
export class GithubService {  

  //  private _url: string = "/assets/data/statuses.json";
  private _reposUrl: string = "https://api.github.com/users/jorluiseptor/repos?sort=upated";
  private _profileUrl: string = "https://api.github.com/users/jorluiseptor";

  constructor(private http: HttpClient) { }

  //get github account info
  getProfile(): Observable<IProfile>{
    return this.http.get<IProfile>(this._profileUrl);
  }
  //get my public repositories
  getRepos(): Observable<IRepositories[]>{
    return this.http.get<IRepositories[]>(this._reposUrl);
  };
}
