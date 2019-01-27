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
                    support: event.target.value
                })
        }

        //send the state to the Store
        this.setSupport = () => {
            const action = {type: 'SUPPORT_LEVEL',
                            payload:this.state,
            };
            this.props.dispatch(action);
            console.log('support Next Click', this.state);
            this.props.history.push('/Comments');
        }
        
    }

    render() {
        return (
            <div>
                    <h4>Do you feel Supported?</h4>
               <input type="number" placeholder="Do you feel Supported? 1-5" onChange={this.supportChange} />

                <button onClick={this.setSupport}>Next</button>
            </div>
        );
    }
}
// ReactDOM.render(<App />,document.getElementById('app')); 
export default connect(mapStateToProps,)(Support);