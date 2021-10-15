import React from "react";
import { ITeam } from "../../interfaces";
import { Container, Scores } from "./styles";

interface ITableScores {
  data: ITeam[];
}

const TableScores: React.FC<ITableScores> = ({ data }) => {
  return (
    <Container>
      <Scores>
        <thead>
          <tr>
            <th scope="col">*</th>
            <th scope="col">TEAM</th>
            <th scope="col">WIN</th>
            <th scope="col">LOSES</th>
            <th scope="col">POINTS</th>
          </tr>
        </thead>
        <tbody>
          {data.map((time) => (
            <tr key={time.team.id}>
              <td>{time.stats[8].value}</td>
              <td>{time.team.name}</td>
              <td>{time.stats[0].value}</td>
              <td>{time.stats[1].value}</td>
              <td>{time.stats[6].value}</td>
            </tr>
          ))}
        </tbody>
      </Scores>
    </Container>
  );
};

export default TableScores;
