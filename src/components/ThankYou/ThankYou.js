import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
// import Typography from '@material-ui/core/Typography';
import './ThankYou.css';

function mapReduxStoreToProps(state) {
    return {
    };
}


class ThankYou extends Component {
    constructor(props){
        super(props);
        this.state = {
            feeling: 0,
            understanding: 0,
            support: 0,
            comments: '',
        };
    }

    thankClick = () => {
        this.setState({
            feeling: 0,
            understanding: 0,
            support: 0,
            comments: '',
        })
        this.props.history.push('/');
    }



    render() {
        return (
            <div className="container">
                <Card className="card">
                    <CardContent>
                        <h3 className="header">Thank You for the Feedback!</h3>
                    </CardContent>
                    <CardActions className="sButton">
                        <Button onClick={this.thankClick} className="thankYouBtn" variant="contained" color="primary">Start another Review</Button>
                    </CardActions>
                </Card>
            </div>
        );
    }
}

export default connect(mapReduxStoreToProps,)(ThankYou);