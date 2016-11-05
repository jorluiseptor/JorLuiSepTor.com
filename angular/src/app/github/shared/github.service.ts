import { Injectable } from '@angular/core';
import { Http, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  constructor(private http: Http) {}

  /** Get the organization */
  getOrg(org: string) {
    return this.makeRequest(`org/${org}`);
  }
  
  /** Get the user */
  getUser(user: string) {
    return this.makeRequest(`user/${user}`);
  }

  /** get Repos for org */
  getReposForOrg(org: string) {
    return this.makeRequest(`orgs/${org}/repos`);
  }

  /** Get repos for user */
  getReposForUser(user: string) {
    return this.makeRequest(`users/${user}/repos`);
  }

  /** Get Repo for Org */
  getRepoForOrg(org: string, repo: string) {
    return this.makeRequest(`repos/${org}/${repo}`);
  }

  /** Get Repo for User */
  getRepoForUser(user: string, repo: string) {
    return this.makeRequest(`repos/${user}/${repo}`);
  }

  private makeRequest(path: string) {
    let params = new URLSearchParams();
    params.set('per_page', '100');

    let url = `https://api.github.com/${ path }`;
    return this.http.get(url, {search: params})
      .map((res) => res.json());
  }
}
