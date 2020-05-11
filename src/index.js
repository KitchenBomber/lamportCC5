import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import { createStore } from 'redux'
import { Provider } from 'react-redux';


const state = {
    speed: 0,
    passengers: ["Alan"]
};
    

// put your reducer here!
const firstReducer = (state, action)=>{
    console.log('in firstReducer', state, action);
    if(action === "faster"){
        return {speed: this.state.speed + 1}
    } else if (action.type === "slower") {
        return { speed: this.state.speed - 1 }
    } else if (action.type === "newCrew") {
        return { ...state, passengers: action.payload }
    }
}

// use reducer in store
const storeInstance = createStore(firstReducer);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
