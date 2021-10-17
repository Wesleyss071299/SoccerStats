import React from "react";
import { Container, Text, Image } from "./styles";
import { useStandingContext } from "./../../hooks/StandingsContext";

interface ILeagueButton {
  name: string;
  url: string;
  id: string;
}

const LeagueButton: React.FC<ILeagueButton> = ({ name, url, id }) => {
  const { setLeagueId } = useStandingContext();

  const getSatandings = () => {
    setLeagueId(id);
  };

  return (
    <Container onClick={getSatandings}>
      <Image src={url} />
      <Text>{name}</Text>
    </Container>
  );
};

export default LeagueButton;
