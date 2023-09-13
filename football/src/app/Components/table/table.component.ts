import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FootballService } from '../../Services/football.service';
import { stand } from '../../models/standings';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  public standings! : stand[];
  leagueId: string;
  constructor(private footBallService : FootballService, private route : ActivatedRoute, private router: Router){
    this.leagueId = this.route.snapshot.params['id'];
  }
  ngOnInit() {
    this.footBallService.getStandings(this.leagueId,'2023').subscribe((data) => {
      this.standings = data.response[0].league.standings[0];
    })
  }

  goToResults(item: stand): void{
    localStorage.setItem('selectedRoute',this.router.url);
    this.router.navigate(['/results/'+ item.team.id]);
  }
}
