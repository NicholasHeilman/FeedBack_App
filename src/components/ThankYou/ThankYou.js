import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Header from '../Header/Header.js';
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
              
                <h3 className="header">Thank You for the Feedback!</h3>

                {/* this button will not center for a reson I can't fugure out */}
                <div class="sButton">
                <Button onClick={this.thankClick} className="thankYouBtn" variant="contained" color="primary">Start another Review</Button>
                </div>

            </div>
        );
    }
}

export default connect(mapReduxStoreToProps,)(ThankYou);