import React from "react";
import './Step.css';

function Step() {

    function test() {
        console.log("zmiana input");
    }

    return(
        <div className="step">
            Step:<input onChange={test} type="number" />
        </div>
    );
}

export default Step;