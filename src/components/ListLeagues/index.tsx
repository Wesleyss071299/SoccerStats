import React from "react";
import { ILeague } from "../../interfaces";
import LeagueButton from "../LeagueButton";
import { Container } from "./styles";

interface IListLeagues {
  data: ILeague[];
}

const ListLeagues: React.FC<IListLeagues> = ({ data }) => {
  return (
    <Container>
      {data.map((item) => (
        <LeagueButton name={item.name} url={item.logos.dark} />
      ))}
    </Container>
  );
};

export default ListLeagues;
