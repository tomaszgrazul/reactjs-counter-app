import React, { useState, useEffect } from "react";

import './ClockFunctional.css';

const ClockFunctional = (props) => {

    console.log('inicjalizacja');
    const [date, setDate] = useState(new Date());

    const tick = () => setDate(new Date());

    useEffect(() => {
        let timerID = setInterval(() => tick(), 1000);
        console.log('montowanie i update');

        return (() => {
            clearInterval(timerID);
            console.log('umontning');
        });
    }, [date]);

    return (
        <div className="clock">
            <h4>Time: {date.toLocaleTimeString()} <span onClick={props.toggleClockMethod}>x</span></h4>
        </div>
    );
}

export default ClockFunctional;