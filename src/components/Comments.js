import React, { Component } from 'react';
import { connect } from 'react-redux';

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
                    <h4>Additional Comments?</h4>
               <input type="text" placeholder="Comments" onChange={this.commentChange} />

                <button onClick={this.setComment}>Next</button>
            </div>
        );
    }
}
  

export default connect(
    mapReduxStoreToProps,
)(Comments);