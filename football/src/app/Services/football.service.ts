import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaders,
  HttpParams,
  HttpParamsOptions,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Standings } from '../models/standings';
import { TeamResults } from '../models/teams';
@Injectable({
  providedIn: 'root',
})
export class FootballService {
  public base_url = 'https://v3.football.api-sports.io/';
  private API_KEY = '6ac91c2e6e2a4badf9cabe64615536a3';
  constructor(private http: HttpClient) {}

  getStandings(league: string, season: string): Observable<Standings> {
    const myObject = {
      league: league,
      season: season,
    };
    const httpParams: HttpParamsOptions = {
      fromObject: myObject,
    } as HttpParamsOptions;
    const headers = new HttpHeaders().set('x-apisports-key', this.API_KEY);
    const options = { params: new HttpParams(httpParams), headers: headers };
    return this.http.get<Standings>(this.base_url + '/standings', options);
  }

  getTeamResults(team: string): Observable<TeamResults> {
    const myObject = {
      team: team,
      last: 10,
      status: 'FT',
    };
    const httpParams: HttpParamsOptions = {
      fromObject: myObject,
    } as HttpParamsOptions;
    const headers = new HttpHeaders().set('x-apisports-key', this.API_KEY);
    const options = { params: new HttpParams(httpParams), headers: headers };
    return this.http.get<TeamResults>(this.base_url + '/fixtures', options);
  }
}
