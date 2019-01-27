import React, { Component } from 'react';
import { connect } from 'react-redux';
// import ReactDOM from 'react-dom';
// import InputRange from 'react-input-range';

function mapReduxStoreToProps(state) {
    return {

    };
}

class Feeling extends Component {
    constructor(props){
        super(props);
        this.state = {
            feeling:  0,
        };
            //attempt at setting a range for the input with a slider bar
        // this.handleFeelingChange = (input) => {
        //         if (input.value < 0) {
        //             input.target.value = 0;
        //             return input.target.value 
        //         }
        //         else if (input.value > 5) {
        //              input.target.value = 5;
        //              return input.target.value;
        //         } else {
        //         this.setState ({
        //             feeling: input.target.value
        //             })
                   
        //         }
        //         console.log(input.target.value);
        //     }
        
        this.feelingChange = (event) => {
                this.setState({
                    feeling: event.target.value
                })
        }

        this.setFeeling = () => {
            const action = {type: 'SET_FEELING',
                            payload:this.state,
            };
            this.props.dispatch(action);
            console.log('Feeling Next Click', this.state);
            this.props.history.push('/Understanding');
        }
        
    }
    render() {
        return (
            <div>
                {/* <InputRange maxValue={5} 
                            minValue={0}
                            value={this.state.value}
                onChange={value => this.setState({ value })}  */}
                    <h4>How are you Felling Today? Between 1-5</h4>
               <input type="number" placeholder="How are you Feeling? 1-5" onChange={this.feelingChange} />

                <button onClick={this.setFeeling}>Next</button>
            </div>
        );
    }
}
// ReactDOM.render(<App />,document.getElementById('app')); 
export default connect(mapReduxStoreToProps,)(Feeling);