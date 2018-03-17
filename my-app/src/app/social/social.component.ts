import { Component, OnInit } from '@angular/core';
import { FacebookService } from './facebook.service';
import { TwitterService } from './twitter.service';


@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.sass']
})
export class SocialComponent implements OnInit {

  public facebookStatuses;

  constructor(private _facebookService: FacebookService, 
              private _twitterService: TwitterService) { }

  ngOnInit() {
    this._facebookService.getStatuses()
        .subscribe(data => this.facebookStatuses = data)
  }
}
