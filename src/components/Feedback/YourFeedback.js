import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from '@material-ui/core/Card';
// import { withStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Feedback.css';


class YourFeedback extends Component {



    submitClick = () => {
        console.log('Submit Click');      
    };

   
    render() {
        
    
    
      

        return (
            <div>
                <Card className="reviewCard">
                    <Typography className="reviewHeader">
                        Reivew Your Feedback
                    </Typography>
                    <CardContent>
                        <Typography className="reviewBody">
                            Feeling:{this.props.reduxStore.feelingToday.feeling}
                            <br />
                            Understand:{this.props.reduxStore.understandToday.understanding}
                            <br />
                            Support:{this.props.reduxStore.supportLevel.support}
                            <br />
                            Comments:{this.props.reduxStore.addComments.comments}
                        </Typography>
                    </CardContent>
                    <CardActions className="submitButton">
                        <Button onClick={this.submitClick} className="submitBtn" variant="contained" color="primary">Submit Review</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}
const mapReduxStoreToProps = (reduxStore) => ({
    reduxStore: reduxStore
})
export default connect(
    mapReduxStoreToProps,
)(YourFeedback);