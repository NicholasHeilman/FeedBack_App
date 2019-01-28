import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Feedback.css';



// function mapReduxStoreToProps(state) {
//     return {

//     };
// }

class Comments extends Component {
    constructor(props){
        super(props);
        this.state ={
            feeling: 0,
            understanding: 0,
            support: 0,
            comments: '',
        };
    
    
                //disable the next button until a value is selected
        this.disableBtn = () => {
            if (this.props.reduxStore.addComments.comments === '') {
                return <Button variant="contained" color="primary" disabled>Submit Review</Button>
            } else {
                return <Button className="nextBtn"
                                    onClick={this.submitClick}    
                                    variant="contained" 
                                    color="primary">Submit Review</Button>
                }
            }    
        
        } 

        sendToDb = () => {
            this.setState({
                feeling: this.props.reduxStore.feelingToday.feeling,
                understanding: this.props.reduxStore.understandToday.understanding,
                support: this.props.reduxStore.supportLevel.support,
                comments: this.props.reduxStore.addComments.comments
            });    
        } 

     submitClick(){
         axios ({
             method: 'POST',
             url: '/feedback',
             data: this.state
         }).then((response) => {
            this.props.history.push('/ThankYou');
        }).catch((error) => {
            console.log('POST Error', error)
            alert('POST Error');
        })
     }
        
   

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
                {this.disableBtn()}
                    {/* <Button onClick={this.submitClick} className="submitBtn" variant="contained" color="primary">Submit Review</Button> */}
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
)(Comments);