import { Component, OnInit, Input } from '@angular/core';

import { GithubConnectorService } from '../gh-connector.service';

@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit {

  @Input() repoName: string;

  p: number = 1;

  issues: any;
  status: string;


  constructor(private ghConnectorService: GithubConnectorService) { }

  ngOnInit() {
  }

  getIssues(): void {

    this.status = 'Buscando Issues...';

    this.ghConnectorService.getIssues(this.repoName)
      .subscribe(
        (issues) => {
          this.issues = issues,
            this.status = 'Repositorio Encontrado';
        },
        (error) => {
          this.status = 'Repositorio no encontrado o error en el nombre';
          this.issues = undefined;
        });

  }

}
