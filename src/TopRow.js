import React, { useState,useEffect } from "react";
import "./App.css";

const TopRow = (props) => {
    // variables Timer
    const [minTimer, setMinTimer] = useState(4)
    const [secTimer, setSecTimer] = useState('00')
    const [secondsCount, SetSecondsCount] = useState(0)
    const totalTimerSeconds = 240
    useEffect(() => {
        const timer = setInterval(() => {
            if(secondsCount !== 0 && secondsCount <= 240) {
                if(secTimer == '00') {
                    setMinTimer(`0${minTimer - 1}`)
                    setSecTimer(59)
                } else {
                    if(secTimer > 10) {
                        setSecTimer(secTimer-1)
                    } else {
                        setSecTimer(`0${secTimer-1}`)
                    } 
                }
            }
            if(secondsCount <= totalTimerSeconds) {
                SetSecondsCount(secondsCount + 1)
            }
        }, 1000)
        return () => clearInterval(timer)
    },)
  return (
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}
            <div className="home__score">{props.homeScore}</div>
          </div>
          <div className="timer">{`${minTimer}:${secTimer}`}</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{props.visitorScore}</div>
          </div>
        </div>
        );
    };
    
    export default TopRow;