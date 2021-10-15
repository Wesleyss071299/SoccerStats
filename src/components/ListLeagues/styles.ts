import styled from "styled-components";

export const Container = styled.ul`
  max-height: 600px;
  width: 300px;
  overflow: hidden;
  overflow-y: scroll;
  direction:rtl; 
  margin-left: 30px;
  ::-webkit-scrollbar {
    width: 1px;
  }
  /* Track */
  ::-webkit-scrollbar-track {
    background: #0000;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #00fa9a;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #00fa9a;
  }
`;
