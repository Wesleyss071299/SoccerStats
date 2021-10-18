import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: black;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  img {
    height: 140px;
    width: 200px;
  }
  @media (max-width: 600px) {
    img {
      height: 100px;
      width: 160px;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 30px;
  align-items: center;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;
