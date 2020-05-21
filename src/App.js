//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import BottomRow from "./BottomRow";
import TopRow from "./TopRow";
import ButtonsRow from "./ButtonsRow";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(32)
  const [visitorScore, setVisitorScore] = useState(32)
  return (
    <div className="container">
      <section className="scoreboard">
        <TopRow 
          homeScore={homeScore} 
          visitorScore={visitorScore}
        />
        <BottomRow />
      </section>
      <ButtonsRow 
        homeScore={homeScore} 
        visitorScore={visitorScore}
        setHomeScore={setHomeScore}
        setVisitorScore={setVisitorScore}
      />
    </div>
  );
}

export default App;
