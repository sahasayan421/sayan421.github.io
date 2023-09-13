import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballService } from '../Services/football.service';
import { teamsData } from '../models/teams';

@Component({
  selector: 'app-game-results',
  templateUrl: './game-results.component.html',
  styleUrls: ['./game-results.component.css'],
})
export class GameResultsComponent implements OnInit {
  public teamId: string;
  public teams!: teamsData[];
  constructor(
    private footBallService: FootballService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.teamId = this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.footBallService
      .getTeamResults(this.teamId)
      .subscribe((data) => {
        this.teams = data.response;
      });
  }

  goBack() {
    const route = localStorage.getItem('selectedRoute');
    this.router.navigate([route]);
  }
}
