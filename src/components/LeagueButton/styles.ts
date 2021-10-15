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
    background: rgba(14,14,14, .4);
    border: 2px solid;
  }
`;


export const Text = styled.span`
  color: #00fa9a;
  text-decoration: none;
  font-weight: 700;
`

export const Image = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 50%;
`
