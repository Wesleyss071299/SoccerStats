import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Scores = styled.table`
  margin: 1rem auto;
  width: 100%;
  max-width: 60rem;
  text-align: center;
  border: 1px solid #00fa9a;
  border-collapse: collapse;
  color: #00fa9a;
  font-size: 20px;
  text-decoration: none;
  font-weight: 900;

  th:not(:nth-child(2)),
  td:not(:nth-child(2)) {
    min-width: 1rem;
    max-width: 4rem;
  }
  tr {
    :nth-child(-n + 4) {
      color: green;
    }
    :nth-last-child(-n + 4) {
      color: red;
    }
    th {
      color: #535353;
    }
    th:nth-child(3),
    td:nth-child(3) {
      background: rgba(255, 255, 255, 0.1);
    }
  }
  tbody > tr {
    &:hover {
      background: #00fa9a !important;
      color: #0e0e0e;
    }
    &:nth-child(odd) {
      background: rgba(255, 255, 255, 0.1);
    }
  }

  @media (max-width: 600px) {
    td:nth-child(3) {
      display: none;
    }
    th:nth-child(3) {
      display: none;
    }
    td:nth-child(4) {
      display: none;
    }
    th:nth-child(4) {
      display: none;
    }
    font-size: 15px;
    width: 85%;
  }
`;
