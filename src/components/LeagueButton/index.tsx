import React from 'react';
import { Container, Text, Image } from './styles';

interface ILeagueButton {
  name: string;
  url: string;
}


const LeagueButton: React.FC<ILeagueButton> = ({name, url}) => {
  return (
    <Container>
      <Image src={url}/>
      <Text>{name}</Text>
    </Container>
  )
}

export default LeagueButton;