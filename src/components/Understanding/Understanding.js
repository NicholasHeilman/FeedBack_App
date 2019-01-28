import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import YourFeedback from '../Feedback/YourFeedback.js';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../Feeling/Feeling.css';

function mapReduxStoreToProps(state) {
    return {

    };
}

class Understanding extends Component {
    constructor(props){
        super(props);
        this.state = {
            understanding:  0,
        };

        // set the state 
        this.understandingChange = (event) => {
                this.setState({
                    understanding: event.target.value
                })
        }

        //send the state to the Store
        this.setUnderstanding = () => {
            const action = {type: 'UNDERSTAND_TODAY',
                            payload:this.state,
            };
            this.props.dispatch(action);
            console.log('Understanding Next Click', this.state);
            this.props.history.push('/Supported');
        }
        
    }

    render() {
        return (
            <div>
               <Card className="card">
                    <Typography className="cardHeader">
                        <h4>How well are you understanding the material?</h4>
                    </Typography>
                    <Typography ClassName="cardBody">
                        <CardContent>
                            <select onChange={this.understandingChange}  className="cardBody" placeholder="Understanding?"  >
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
                    <Button className="nextBtn"
                        onClick={this.setUnderstanding} variant="contained" color="primary">Next</Button>
                    </CardActions>
                </Card>
                <YourFeedback />
            </div>
        );
    }
}
// ReactDOM.render(<App />,document.getElementById('app')); 
export default connect(mapReduxStoreToProps,)(Understanding);