import React, { Component } from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    return {

    };
}

class Support extends Component {
    constructor(props){
        super(props);
        this.state = {
            support:  0,
        };

        // set the state 
        this.supportChange = (event) => {
                this.setState({
                    understanding: event.target.value
                })
        }

        //send the state to the Store
        this.setSupport = () => {
            const action = {type: 'SUPPORT_LEVEL',
                            payload:this.state,
            };
            this.props.dispatch(action);
            console.log('Understanding Next Click', this.state);
            this.props.history.push('/Comments');
        }
        
    }

    render() {
        return (
            <div>
                    <h4>How well are you understanding the material?</h4>
               <input type="number" placeholder="Understanding? 1-5" onChange={this.understandingChange} />

                <button onClick={this.setUnderstanding}>Next</button>
            </div>
        );
    }
}
// ReactDOM.render(<App />,document.getElementById('app')); 
export default connect(mapStateToProps,)(Support);