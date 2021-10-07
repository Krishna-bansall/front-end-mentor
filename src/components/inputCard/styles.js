import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  padding: 0;
  display: flex;
  position: relative;
  background-color: ${({ color }) => color};
  border-radius: 1rem;
  align-items: flex-end;
  justify-content: center;

  img {
    width: 35%;
    position: absolute;
    top: 0;
    right: 0;
  }
`;

export const Infographic = styled.div`
  position: relative;
  padding: 0.5rem 2rem;
  width: 100%;
  height: 80%;
  flex-direction: column;
  align-items: center;
  display: flex;
  border-radius: 1rem;
  background-color: var(--darkBlue);
  z-index: 10;
  transition: all ease-in-out 0.2s;
  :hover {
    height: 100%;
    background-color: var(--desaturatedBlue);
  }

  .box {
    align-self: flex-start;

    img {
      top: 2rem;
      right: 2rem;
      width: 1rem;

      :hover {
        cursor: pointer;
      }
    }
  }

  h1 {
    font-weight: 300;
    align-self: flex-start;
    margin: 0;
    margin-top: 1rem;
    margin-bottom: 0.3rem;
    font-size: 2.3rem;
  }
  h4 {
    font-weight: 500;
    margin: 0rem;
    margin-top: 1rem;
  }

  p {
    align-self: flex-start;
    margin-top: 0;
    font-weight: 300;
    color: var(--paleBlue);
    font-size: 0.8rem;
  }

  @media screen and (max-width: 400px) {
    height: 60%;
  }
`;
