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

class Comments extends Component {
    constructor(props){
        super(props);
        this.state = {
            comments:  '',
        };

           //disable the next button until a value is selected
           this.disableBtn = () => {
            if (this.state.comments === '') {
                return <Button variant="contained" color="primary" disabled>Next</Button>
            } else {
                return <Button className="nextBtn"
                                onClick={this.setComment}     
                                variant="contained" 
                                color="primary">Next</Button>
            }
        }

        // set the state 
        this.commentChange = (event) => {
                this.setState({
                    comments: event.target.value
                })
        }

        //send the state to the Store
        this.setComment = () => {
            const action = {type: 'COMMENTS',
                            payload:this.state,
            };
            this.props.dispatch(action);
            console.log('Comment Next Click', this.state);
            this.props.history.push('/YourFeedback');
        }
        
    }

    render() {
        return (
            <div>
                <Card className="card">
                    <Typography className="cardHeader">
                        Additional Comments?
                    </Typography>
                    <Typography className="cardBody">
                        <CardContent>
                            <input type="text" placeholder="Comments" onChange={this.commentChange} />
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
  

export default connect(
    mapReduxStoreToProps,
)(Comments);