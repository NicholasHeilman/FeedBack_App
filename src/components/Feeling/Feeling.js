import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import YourFeedback from '../Feedback/YourFeedback.js';
import Card from '@material-ui/core/Card';
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

        //disable the next button until a value is selected
        this.disableBtn = () => {
            if (this.state.feeling === 0) {
                return <Button variant="contained" color="primary" disabled>Incomplete</Button>
            } else {
                return <Button className="nextBtn"
                onClick={this.setFeeling} variant="contained" color="primary">Next</Button>
            }
        }
        
        //handle the state state change from the input
        this.feelingChange = (event) => {
                this.setState({
                    feeling: event.target.value
                });
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