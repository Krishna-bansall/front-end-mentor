import styled, { createGlobalStyle } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 400px) {
    display: block;
  }
`;

export const Grid = styled.div`
  display: grid;
  z-index: 10;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: repeat(3, minmax(200px, 1fr));
  grid-gap: 1rem;
  margin-left: 2rem;

  @media screen and (max-width: 800px) {
    display: flex;
    flex-direction: column;
    margin: 2rem 2rem;
  }
  @media screen and (max-width: 400px) {
    margin: 2rem 0rem;
  }
`;

export const GlobalStyle = createGlobalStyle`

  :root {
    --blue: hsl(246, 80%, 60%);
    --veryDarkBlue: hsl(226, 43%, 10%);
    --desaturatedBlue: hsl(235, 45%, 61%);
    --darkBlue: hsl(235, 46%, 20%);
    --lightOrange: hsl(15, 100%, 70%);
    --Work: hsl(15, 100%, 70%);
    --softBlue: hsl(195, 74%, 62%);
    --Play: hsl(195, 74%, 62%);
    --lightRed: hsl(348, 100%, 68%);
    --Study: hsl(348, 100%, 68%);
    --limeGreen: hsl(145, 58%, 55%);
    --Exercise: hsl(145, 58%, 55%);
    --Social: hsl(264, 64%, 52%);
    --Self-Care: hsl(43, 84%, 65%);
    --paleBlue: hsl(236, 100%, 87%);
  }
  * {
    box-sizing: border-box;
    font-family: 'Rubik', sans-serif;
  }
  html {
    font-size: 18px;
    @media screen and (max-width: 900px) {
       
        font-size: 13px;
      }

  }
  body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    background-color: var(--veryDarkBlue);
    color: white;
    padding: 6rem 0rem; 

    @media screen and (max-width: 400px) {
      padding: 2rem ;
    }
    }


`;
