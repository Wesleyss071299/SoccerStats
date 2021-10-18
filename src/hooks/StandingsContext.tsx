import { createContext, useCallback, useContext, useState } from "react";
import { IResponseStanding, ITeam } from "../interfaces";
import api from "../services/api";

interface StandingContextData {
  leagueId: string;
  setLeagueId: React.Dispatch<React.SetStateAction<string>>;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  teams: ITeam[];
  setTeams: React.Dispatch<React.SetStateAction<ITeam[]>>;
  fetchTeams: () => Promise<void>;
}

const StandingContext = createContext<StandingContextData>(
  {} as StandingContextData
);

export const StandingProvider: React.FC = ({ children }) => {
  const [leagueId, setLeagueId] = useState("arg.1");
  const [loading, setLoading] = useState(false);
  const [teams, setTeams] = useState<ITeam[]>([]);

  const fetchTeams = useCallback(async () => {
    setLoading(true);
    try {
      const response: IResponseStanding = await api.get(
        `/leagues/${leagueId}/standings?season=2021&sort=asc`
      );
      const data: ITeam[] = response.data.data.standings;
      setTeams(data);
    } catch (error) {
      throw error;
    } finally {
      setLoading(false);
    }
  }, [leagueId]);

  return (
    <StandingContext.Provider
      value={{
        leagueId,
        setLeagueId,
        loading,
        setLoading,
        teams,
        setTeams,
        fetchTeams,
      }}
    >
      {children}
    </StandingContext.Provider>
  );
};

export function useStandingContext(): StandingContextData {
  const context = useContext(StandingContext);

  if (!context) {
    throw new Error("useEvent must be used within an EventProvider");
  }

  return context;
}
