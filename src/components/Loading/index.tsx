import React from "react";
import { Container, Dot } from "./styles";

const Loading: React.FC = () => {
  return (
    <Container>
      <Dot />
      <Dot />
      <Dot />
      <Dot />
    </Container>
  );
};

export default Loading;
