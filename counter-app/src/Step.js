import React from "react";
import './Step.css';

// function Step() {

//     function test() {
//         console.log("zmiana input");
//     }

//     return(
//         <div className="step">
//             Step:<input onChange={test} type="number" />
//         </div>
//     );
// }


class Step extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
      }

      handleChange(event) {
        this.setState({value: event.target.value});
        console.log('Podano następującą wartość: ' + this.state.value);
      }

    render() {
        return (
            <div className="step">
                Step:<input 
                value={this.state.value} 
                onChange={this.handleChange} type="number" 
                />
            </div>
        );
    } 
}

export default Step;