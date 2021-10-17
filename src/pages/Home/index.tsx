import React, { useEffect, useState } from "react";
import { Container, Header, Wrapper } from "./styles";
import api from "../../services/api";
import { ILeague, IResponse, IResponseStanding, ITeam } from "../../interfaces";
import ListLeagues from "../../components/ListLeagues";
import TableScores from "../../components/TableScores";
import logo from "../../assets/logo.png";

const Home: React.FC = () => {
  const [leagues, setLeagues] = useState<ILeague[]>([]);
  const [teams, setTeams] = useState<ITeam[]>([]);

  const fetchLeagues = async () => {
    const response: IResponse = await api.get("/leagues");
    const data: ILeague[] = response.data.data;
    setLeagues(data);
  };

  const fetchTeams = async () => {
    const response: IResponseStanding = await api.get(
      "/leagues/bra.1/standings?season=2021&sort=asc"
    );
    const data: ITeam[] = response.data.data.standings;
    console.log(data);
    setTeams(data);
  };

  useEffect(() => {
    fetchLeagues();
    fetchTeams();
  }, []);
  
  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <Wrapper>
        <ListLeagues data={leagues} />
        <TableScores data={teams} />
      </Wrapper>
    </Container>
  );
};

export default Home;
