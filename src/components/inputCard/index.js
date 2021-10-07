import React from "react";
import { Container, Infographic } from "./styles";

function InputCard({ bgColor, icon, title, timeframe, state }) {
  console.log(state);
  return (
    <>
      <Container color={bgColor}>
        <img src={icon} alt="" />
        <Infographic>
          <div className="box">
            <h4>{title}</h4>
            <img src="images/icon-ellipsis.svg" alt="" />
          </div>
          <h1>{state === "" ? 0 : timeframe[state]["current"]}hrs</h1>
          <p>Last Week - {state === "" ? 0 : timeframe[state]["previous"]} </p>
        </Infographic>
      </Container>
    </>
  );
}

export default InputCard;
