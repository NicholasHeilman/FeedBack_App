import React, { Component } from 'react';
// import axios from 'axiosnpm run server';
import './App.css';
import Header from '../Header.js';
import Feeling from '../Feeling/Feeling.js';
import Understanding from '../Understanding.js';
import Supported from '../Supported.js';
import Comments from '../Comments.js';
import YourFeedback from '..//YourFeedback.js';

import { HashRouter as Router, Route,} from 'react-router-dom';

class App extends Component {


  render() {
    return (
      <div className="container">
         <Header />
        <div>
            <Router>
               <div>
            <Route exact path="/" component={Feeling} />
            <Route exact path="/Understanding" component={Understanding} /> 
            <Route exact path="/Supported" component={Supported} />
            <Route exact path="/Comments" component={Comments} />
            <Route exact path="/YourFeedback" component={YourFeedback} />
            {/* <Route exact path="/admin" component={Admin} />  */}
          </div>
        </Router>
    </div>
    
     
        {/* <Feeling /> */}
      </div>
    );
  }
}

export default App;
