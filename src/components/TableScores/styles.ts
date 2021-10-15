import styled from 'styled-components';

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
    th {
      color: #535353;
    }
    th:nth-child(3),
    td:nth-child(3) {
      background: rgba(255, 255, 255, .1);
    }
  }
  tbody > tr {
    &:hover {
      background: #00fa9a !important;
      color:#0e0e0e;
    }
    &:nth-child(odd) {
      background: rgba(255, 255, 255, .1);
    }
  }
`;
