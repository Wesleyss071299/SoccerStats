export interface ILeague {
  id: string;
  name: string;
  logos: {
    light: string;
    dark: string;
  };
}

export interface IResponse {
  data: {
    data: ILeague[];
  };
}

export interface IResponseStanding {
  data: {
    data: {
      name: string;
      standings: ITeam[];
    };
  };
}

export interface ITeam {
  team: {
    id: number;
    name: string;
  };
  stats: Stat[];
}

export interface Stat {
  name: string;
  value: string;
}
