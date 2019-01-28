import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import YourFeedback from '../Feedback/YourFeedback.js';
// import ReactDOM from 'react-dom';
// import InputRange from 'react-input-range';
import Card from '@material-ui/core/Card';
// import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Feeling.css';

import 'react-input-range/lib/css/index.css'

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

        //disable the next button until a value is selected
        this.disableBtn = () => {
            if (this.state.feeling === 0) {
                return <Button variant="contained" color="primary" disabled>Next</Button>
            } else {
                return <Button className="nextBtn"
                onClick={this.setFeeling} variant="contained" color="primary">Next</Button>
            }
        }
        
        //handle the state state change from the input
        this.feelingChange = (event) => {
                this.setState({
                    feeling: event.target.value
                })
        }

        //handle the onClick and move user to next page
        this.setFeeling = () => {
            const action = {type: 'SET_FEELING',
                            payload:this.state,
            };
            this.props.dispatch(action);
            this.props.history.push('/Understanding');
        }
        
    }
    render() {
        return (
           
            // attempted to use a slider bar to select the number almost working

            //      <div id="app">
            //      <form className="form">
        
            //         </div>
            //    {/* <InputRange maxValue={5} 
            //                 minValue={0}
            //                 value={this.state.value}
            //     onChange={value => this.setState({ value })} />  */} 
                    
            //     <input type="number" placeholder="How are you Feeling? 1-5" onChange={this.feelingChange} /> 
            <div>
                <Card className="card">
                    <Typography className="cardHeader">
                        How are you Felling Today? 
                    </Typography>
                    <Typography className="cardBody">
                        <CardContent>
                            <select onChange={this.feelingChange} className="cardBody">
                                <option></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </CardContent>
                    </Typography>
                    <CardActions className="nextButton">
                         {this.disableBtn()}
                    </CardActions>
                </Card>
                <YourFeedback />
                </div>
        );
    }
}
// ReactDOM.render(<Feeling />,document.getElementById('app')); 
export default connect(mapReduxStoreToProps,)(Feeling);