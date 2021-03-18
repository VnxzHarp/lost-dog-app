import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 100px;
  background-color: #4cc9f0;
  text-align: center;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  max-height: 50vmin;
  height: 100vmin;
  color: #f72585;

  .Header {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
  }
  .Link-Buttons {
    display: flex;
    justify-content: space-evenly;
  }
  img {
    max-height: 20vmin;
    height: 10vmin;
  }
`;
