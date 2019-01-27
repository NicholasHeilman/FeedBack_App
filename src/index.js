import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

//import Redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// import { isNull } from 'util';

//reducer for feelingToday component
const feelingToday = (state = 0, action) => {
   if(action.type === 'SET_FEELING'){
        // console.log('In FEELING', state);
        const addFeeling = action.payload;
        return addFeeling; 
    }
        return state;
}

//Reducer for the understanding component
const understandToday = (state = 0, action) => {
    if(action.type === 'UNDERSTAND_TODAY'){
        console.log('In UNDERSTAND', state );
        const addUnderstand = action.payload;
        return addUnderstand;
    } 
    return state;
}

//Reducer for the Support level
const supportLevel = (state = 0, action) => {
    if(action.type === 'SUPPORT_LEVEL'){
       console.log('In SUPPORT', state);
        const addSupport = action.payload;
        return addSupport;
    }
    return state;
}

//Reducer for the additional comments 
const addComments = (state = '', action) => {
    if(action.type === 'COMMENTS'){
        console.log('In Comments', state);
        const comment = action.payload;
        return comment;
    }
    return state;
}

//Create store
const storeInstance = createStore(
    combineReducers({
        feelingToday,
        understandToday,
        supportLevel,
        addComments,  
    }),
    applyMiddleware(logger),
);
ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
