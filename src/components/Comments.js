import React, { Component } from 'react';
import { connect } from 'react-redux';

function mapStateToProps(state) {
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
                    support: event.target.value
                })
        }

        //send the state to the Store
        this.setComment = () => {
            const action = {type: 'SUPPORT_LEVEL',
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
                    <h4>Do you feel Supported?</h4>
               <input type="number" placeholder="Do you fell Supported? 1-5" onChange={this.supportChange} />

                <button onClick={this.setSupport}>Next</button>
            </div>
        );
    }
}
    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(Comments);