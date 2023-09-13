export interface TeamResults {
  response: Array<teamsData>;
}

export interface teamsData {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
  teams: teams;
  goals : goals
}

export interface teams {
  home: home;
  away : away;
}

export interface home {
  id: number;
  name: string;
  logo: string;
  winner: boolean;
}

export interface away {
    id: number;
    name: string;
    logo: string;
    winner: boolean;
  }

export interface goals {
    home : number;
    away : number;
}