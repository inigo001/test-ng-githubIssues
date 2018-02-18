import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';

@Injectable()
export class GithubConnectorService {

  constructor(private http: HttpClient) {
  }

  getIssues(repo: string): Observable<any> {

    if (typeof repo === 'undefined' || repo === '') {
      return Observable.throw('Error');
    }
    else {
      let repoUrl = 'https://api.github.com/repos/' + this.processUrl(repo) + '/issues?filter=all&state=all'

      return this.http.get<any>(repoUrl);
    }

  }

  private processUrl(repo: string) {

    let repoString = repo.split('/');
    let position = undefined;

    for (let i = 0; i < repoString.length; i++) {
      if (repoString[i] === 'github.com' || repoString[i] == 'www.github.com') {
        position = i;
      }
    }

    let repoName = (typeof position === 'undefined') ? repo : repoString[position + 1] + '/' + repoString[position + 2];

    return repoName;
  }

}
