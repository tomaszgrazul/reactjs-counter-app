import React, {Component} from 'react';
import './Counter.css';

import Dispaly from './Display';
import ButtonsPanel from './ButtonsPanel';
// import Clock from './Clock';
import ClockFunctional from './ClockFunctional';
<<<<<<< HEAD
=======
import Step from './Step';
>>>>>>> d2ab869c24c9fc976094032eb975ffdc01c51245

class Counter extends Component {

    constructor(props) {
        super(props);

        this.state = {
            counterValue: this.props.initValue,
            showClock: true,
        };

        // this.changeValue = this.changeValue.bind(this);
    }

    // changeValue() { // ES5 method (no this context by default)

    changeValue = (action) => {

        this.setState((prevState, prevProps) => {

            let currentCounterValue = prevState.counterValue;

            if (action === 'add') {

                currentCounterValue += 1;

            } else if (action === 'reinit') {

                currentCounterValue = prevProps.initValue;

            } else {
                currentCounterValue = 0;
            }

            return ({
                counterValue: currentCounterValue
            });
        });
    }

    toggleClock = () => {
        this.setState((prevState) => {
            return ({
                showClock: !prevState.showClock
            });
        })
    }

    render() {

            let clockElement  = '';

            if (this.state.showClock) {
                // clockElement = <Clock toggleClockMethod={this.toggleClock}/>;
                clockElement = <ClockFunctional toggleClockMethod={this.toggleClock}/>;

            } else {
                clockElement = <span onClick={this.toggleClock} className='show-clock'>show clock</span>;
            };
        // let randomNumber = Math.floor(Math.random()*(108-1+1)+1);

        return (
            <div className="counter">
                Counter:
                <Dispaly displayValue={this.state.counterValue}/>
                <ButtonsPanel buttonMethod={this.changeValue}/> 
                {/* changeValue bez () bo jest to callback */}
                {clockElement}
<<<<<<< HEAD
=======
                <Step />
>>>>>>> d2ab869c24c9fc976094032eb975ffdc01c51245
            </div>
        );
    }
}


export default Counter;


// function Counter(props) {
 
//     let randomNumber = Math.floor(Math.random() * (108 - 1 + 1) + 1);
 
//     return (
//         <div className="counter">
//             Counter:
//             <span className="value">
//                 {props.initValue}
//             </span>
//         </div>
//     );
// }

// export default Counter;