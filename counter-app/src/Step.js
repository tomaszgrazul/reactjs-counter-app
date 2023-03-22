import React, {useState} from "react";
import './Step.css';

function Step(props) {

    const [stepInitialValue, setValue] = useState(0);

    return (
        <div className="step">
            Step:<input 
            value={stepInitialValue} 
            onChange={(event) => {              
                let eventStepValue = event.target.value;
                setValue(eventStepValue);
                props.stepMethod(eventStepValue);
            }} 
            type="number" />
        </div>
    );
}


// class Step extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {value: '0'};
    
//         this.handleChange = this.handleChange.bind(this);
//       }

//       handleChange(event) {
//         this.setState({value: event.target.value});
//         console.log('Podano następującą wartość: ' + this.state.value);
//       }

//     render() {
//         return (
//             <div className="step">
//                 Step:<input 
//                 // value={this.state.value} 
//                 // onChange={this.handleChange} 
//                 onChange={(event) => {
//                     this.props.stepMethod(event.target.value);
//                 }}
//                 type="number" 
//                 />
//             </div>
//         );
//     } 
// }

export default Step;