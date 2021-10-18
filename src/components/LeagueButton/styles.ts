import styled from "styled-components";

export const Container = styled.li`
  list-style: none;
  display: flex;
  justify-content: space-around;
  cursor: pointer;
  height: 100px;
  align-items: center;
  width: 250px;
  background: rgba(0, 250, 154, 0.05);
  box-shadow: 0px 11px 10px -10px #00fa9a;
  border: 1px solid;
  transition: all 0.2s ease;
  &:hover {
    background: rgba(14, 14, 14, 0.4);
    border: 2px solid;
  }
  @media (max-width: 600px) {
    margin-right: 15px;
    flex-direction: row-reverse;
  }
`;

export const Text = styled.span`
  color: #00fa9a;
  text-decoration: none;
  font-weight: 700;
  @media (max-width: 600px) {
    font-size: 15px;
    width: 100px;
    text-align: left;
  }
  `;

export const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  @media (max-width: 600px) {
    margin-right: 20px;
    height: 30px;
    width: 30px;
  }
`;
