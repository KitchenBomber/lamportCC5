import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';


const firstReducerInitialState = {
    speed: 0,
    passengers: ["Alan"],
};
    

// put your reducer here!
const firstReducer = (state = firstReducerInitialState, action)=>{
    console.log('in firstReducer', state, action);
    if(action.type === "faster"){
        return { ...state, speed: state.speed + 1}
    } else if (action.type === "slower") {
        return { ...state, speed: state.speed - 1 }
    } else if (action.type === "newCrew") {
        // return { ...state, passengers: action.payload.passengers }
        return { ...state, ...state.passengers, passengers: action.payload}
        // return { ...state, action.payload }
    }
    return state;
}

// use reducer in store
const storeInstance = createStore(firstReducer);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
