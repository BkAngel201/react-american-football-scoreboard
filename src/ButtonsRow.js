import React from "react";
import "./App.css";

const ButtonsRow = (props) => {

  const selectChange = (e) => {
    if(e.target.value !== 'quarter') {
      props.setQuarter(e.target.value)
      e.target.value = 'quarter'
    }
    
  }
  return (
    <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => props.scoreHandler('home',7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => props.scoreHandler('home',3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => props.scoreHandler('visitor',7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => props.scoreHandler('visitor',3)}>Away Field Goal</button>
        </div>
        <div className="quarterSelector">
          Quarter
          <select onChange={selectChange}>
            <option value='quarter'>Select Quarter</option>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
          </select>
        </div>
      </section>
      );
    };
    
    export default ButtonsRow;