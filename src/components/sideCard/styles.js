import styled from "styled-components";

export const Container = styled.div`
  border-radius: 1rem;
  background-color: var(--darkBlue);
  display: flex;
  height: 100%;
  flex-direction: column;
  width: 25%;
  text-align: left;

  @media screen and (max-width: 700px) {
    width: 40%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
  }
`;

export const SelectionDiv = styled.div`
  .white {
    color: white;
  }
  padding: 0.4rem;
  color: var(--paleBlue);

  ul {
    list-style: none;
    li {
      margin: 0.9rem 0;

      &:hover {
        color: white;
      }

      button {
        background: none;
        color: inherit;
        border: none;
        padding: 0;
        font: inherit;
        cursor: pointer;
        outline: inherit;
      }
    }
  }

  @media screen and (max-width: 400px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-weight: 400;
    ul {
      padding: 0 !important;
    }

    li {
      display: inline;
      margin: 2rem !important;
      font-size: 0.8rem;
    }
  }
`;

export const Infogroup = styled.div`
  border-radius: 1rem;
  max-height: 2%;
  background-color: var(--blue);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 2rem 4rem;

  h1 {
    font-size: 2rem;
  }

  h1,
  p {
    font-weight: 300;
    margin: 0;
  }

  @media screen and (max-width: 400px) {
    padding: 1.5rem;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    h1 {
      font-size: 1.5rem;
    }

    .text-box {
      flex-direction: column;
      margin-left: 1rem;
    }
  }
`;

export const Image = styled.img`
  width: 30%;
  border-radius: 100%;
  border: 2px solid white;
  margin-bottom: 2rem;

  @media screen and (max-width: 400px) {
    margin: 0;
    width: 20%;
  }
`;
