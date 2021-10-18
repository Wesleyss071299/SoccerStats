import React, { useEffect, useState } from "react";
import { Container, Header, Wrapper } from "./styles";
import api from "../../services/api";
import { ILeague, IResponse } from "../../interfaces";
import ListLeagues from "../../components/ListLeagues";
import TableScores from "../../components/TableScores";
import logo from "../../assets/logo.png";
import { useStandingContext } from "../../hooks/StandingsContext";
import Loading from "../../components/Loading";

const Home: React.FC = () => {
  const [leagues, setLeagues] = useState<ILeague[]>([]);
  const { fetchTeams, teams, loading } = useStandingContext();

  const fetchLeagues = async() => {
    const response: IResponse = await api.get("/leagues");
    const data: ILeague[] = response.data.data;
    setLeagues(data);
  }

  useEffect(() => {
    fetchLeagues();
  }, []);

  useEffect(() => {
    fetchTeams();
  }, [fetchTeams]);

  return (
    <Container>
      <Header>
        <img src={logo} alt="logo" />
      </Header>
      <Wrapper>
        <ListLeagues data={leagues} />
        {loading ? <Loading /> : <TableScores data={teams} />}
      </Wrapper>
    </Container>
  );
};

export default Home;
