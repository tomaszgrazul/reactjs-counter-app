import React, { Component } from "react";

import './Clock.css';

class Clock extends Component {

    constructor(props) {
        super(props);

        this.state = {date: new Date()};
        console.log('inicjalizacja constructor');
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => {this.tick()}, 1000);
        console.log('componentDid Mount');
    }

    componentDidUpdate() {

        console.log('update');
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
        console.log('UnMount');
    }

    tick = () => {
        this.setState({
            date: new Date()
        });
    }

    render() {

        return (
            <div className="clock">
                <h4>Time: {this.state.date.toLocaleTimeString()} <span onClick={this.props.toggleClockMethod}>x</span></h4>
            </div>
        );
    }
}

export default Clock;