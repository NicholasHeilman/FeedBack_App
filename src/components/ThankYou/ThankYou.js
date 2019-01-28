import React, { Component } from 'react';
import Button from '@material-ui/core/Button';



class ThankYou extends Component {




    
    render() {
        return (
            <div>
                <h3>Thank You for the Feedback!</h3>
                <Button className="submitBtn" variant="contained" color="primary">Start another Review</Button>
            </div>
        );
    }
}

export default ThankYou;