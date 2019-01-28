import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Header from '../Header/Header.js';
import './ThankYou.css';



class ThankYou extends Component {

    thankClick = () => {
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

export default ThankYou;