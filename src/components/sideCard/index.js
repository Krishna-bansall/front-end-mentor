import React, { useState, useEffect } from "react";
import { Container, Image, Infogroup, SelectionDiv } from "./styles";

function SideCard({ func }) {
  const [userSelection, setUserSelection] = useState("");

  useEffect(() => {
    func(userSelection);
  }, [userSelection, func]);
  return (
    <>
      <Container>
        <Infogroup>
          <Image src="images/image-jeremy.png" alt="jeremy" />
          <div className="text-box">
            <p>Report for</p>
            <h1>Jeremy Robinson</h1>
          </div>
        </Infogroup>
        <SelectionDiv>
          <ul>
            <li>
              <button
                className={userSelection === "daily" ? "white" : ""}
                onClick={() => setUserSelection("daily")}
              >
                Daily
              </button>
            </li>
            <li>
              <button
                className={userSelection === "weekly" ? "white" : ""}
                onClick={() => setUserSelection("weekly")}
              >
                Weekly
              </button>
            </li>
            <li>
              <button
                className={userSelection === "monthly" ? "white" : ""}
                onClick={() => setUserSelection("monthly")}
              >
                Monthly
              </button>
            </li>
          </ul>
        </SelectionDiv>
      </Container>
    </>
  );
}

export default SideCard;
