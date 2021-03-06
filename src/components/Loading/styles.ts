import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  @media (max-width: 600px) {
    margin-top: 50px;
  }
  div:nth-child(0) {
    animation-delay: 0s;
  }
  div:nth-child(1) {
    animation-delay: 0.2s;
  }
  div:nth-child(2) {
    animation-delay: 0.4s;
  }
  div:nth-child(3) {
    animation-delay: 0.6s;
  }
  div:nth-child(4) {
    animation-delay: 0.8s;
  }
  div:nth-child(5) {
    animation-delay: 1s;
  }
  @keyframes scaling {
    0%,
    100% {
      transform: scale(0.2);
      background-color: #30ffb7;
    }
    40% {
      transform: scale(1);
      background-color: #30ffb7;
    }
    50% {
      transform: scale(1);
      background-color: #30ffb7;
    }
  }
`;

export const Dot = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  transform: scale(0);
  background-color: red;
  animation: scaling 2.5s ease-in-out infinite;
  display: inline-block;
  margin: 0.5rem;
  @media (max-width: 600px) {
    height: 30px;
    width: 30px;
  }
`;
