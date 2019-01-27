import React, { Component } from 'react';
import { connect } from 'react-redux';

class YourFeedback extends Component {
    render() {
        return (
            <div>
                <h4>Reivew Your Feedback</h4>
                    <h4>Your Feeling:{this.props.reduxStore.feelingToday.feeling}</h4>
                    <h4>You Understand:{this.props.reduxStore.understandToday.understanding}</h4>
                    <h4>Support Level:{this.props.reduxStore.supportLevel.support}</h4>
                    <h4>Comments:{this.props.reduxStore.addComments.comments}</h4>
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