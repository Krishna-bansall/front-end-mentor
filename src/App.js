import React from "react";
import { GlobalStyle, Container, Grid } from "./globalStyles";

import data from "./data.json";

import SideCard from "./components/sideCard";
import InputCard from "./components/inputCard";

function App() {
  const [state, setState] = React.useState("");
  console.table(data);
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideCard func={setState} className="side-card" />
        <Grid>
          {data.map((item, index) => (
            <InputCard
              title={item.title}
              bgColor={`var(--${item.title})`}
              timeframe={item["timeframes"]}
              key={index}
              state={state}
              icon={`images/icon-${item.title.toLowerCase()}.svg`}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}

export default App;
